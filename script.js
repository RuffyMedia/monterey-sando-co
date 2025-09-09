// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Location Data Storage (in a real app, this would be stored in a database)
let currentLocation = {
    name: "Not currently parked",
    lat: 36.6002,
    lng: -121.8947,
    isOpen: false
};

// Map initialization
let map;
let marker;

function initMap() {
    // Check if Google Maps API is loaded
    if (typeof google === 'undefined' || !google.maps) {
        console.error('Google Maps API not loaded. Please check your API key.');
        document.getElementById('map').innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">Map unavailable - API key required</div>';
        return;
    }

    // Default location (Monterey, CA)
    const defaultLocation = { lat: 36.6002, lng: -121.8947 };
    
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: defaultLocation,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ]
    });

    // Create marker
    marker = new google.maps.Marker({
        position: defaultLocation,
        map: map,
        title: currentLocation.name,
        icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#27ae60" stroke="#fff" stroke-width="2"/>
                    <path d="M20 8 L24 16 L20 20 L16 16 Z" fill="#fff"/>
                </svg>
            `),
            scaledSize: new google.maps.Size(40, 40)
        }
    });

    updateLocationDisplay();
}

// Update location display
function updateLocationDisplay() {
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    const locationText = document.getElementById('locationText');

    if (currentLocation.isOpen) {
        statusIndicator.classList.add('open');
        statusText.textContent = 'Currently Open';
    } else {
        statusIndicator.classList.remove('open');
        statusText.textContent = 'Currently Closed';
    }

    locationText.textContent = currentLocation.name;

    // Update marker
    if (marker) {
        marker.setPosition({ lat: currentLocation.lat, lng: currentLocation.lng });
        marker.setTitle(currentLocation.name);
        map.setCenter({ lat: currentLocation.lat, lng: currentLocation.lng });
    }
}

// Location update form
document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('locationName').value;
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);
    const isOpen = document.getElementById('isOpen').value === 'true';

    if (name && !isNaN(lat) && !isNaN(lng)) {
        currentLocation = { name, lat, lng, isOpen };
        updateLocationDisplay();
        
        // Show success message
        showMessage('Location updated successfully!', 'success');
        
        // Clear form
        this.reset();
    } else {
        showMessage('Please fill in all fields with valid data.', 'error');
    }
});

// Notification signup form
document.getElementById('notificationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const notifications = Array.from(document.querySelectorAll('input[name="notifications"]:checked'))
        .map(checkbox => checkbox.value);

    if (name && email && notifications.length > 0) {
        // In a real app, this would send data to a server
        const signupData = {
            name,
            email,
            notifications,
            timestamp: new Date().toISOString()
        };
        
        // Store in localStorage for demo purposes
        let subscribers = JSON.parse(localStorage.getItem('locationSubscribers') || '[]');
        subscribers.push(signupData);
        localStorage.setItem('locationSubscribers', JSON.stringify(subscribers));
        
        showSignupMessage(`Thanks ${name}! You'll receive ${notifications.join(', ')} notifications.`, 'success');
        
        // Clear form
        this.reset();
        document.querySelector('input[name="notifications"][value="location"]').checked = true;
    } else {
        showSignupMessage('Please fill in all fields and select at least one notification type.', 'error');
    }
});

// Show signup message
function showSignupMessage(message, type) {
    const messageDiv = document.getElementById('signupMessage');
    messageDiv.textContent = message;
    messageDiv.className = `signup-message ${type}`;
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// Show general message
function showMessage(message, type) {
    // Create temporary message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `signup-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '20px';
    messageDiv.style.right = '20px';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.maxWidth = '300px';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Load Instagram embed script
function loadInstagramEmbed() {
    if (!window.instgrm) {
        const script = document.createElement('script');
        script.async = true;
        script.src = '//www.instagram.com/embed.js';
        document.body.appendChild(script);
    }
}

// Initialize Instagram embed when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadInstagramEmbed();
    
    // Load saved location data
    const savedLocation = localStorage.getItem('currentLocation');
    if (savedLocation) {
        currentLocation = JSON.parse(savedLocation);
        updateLocationDisplay();
    }
});

// Save location data when updated
function saveLocationData() {
    localStorage.setItem('currentLocation', JSON.stringify(currentLocation));
}

// Update the location form submission to save data
document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('locationName').value;
    const lat = parseFloat(document.getElementById('latitude').value);
    const lng = parseFloat(document.getElementById('longitude').value);
    const isOpen = document.getElementById('isOpen').value === 'true';

    if (name && !isNaN(lat) && !isNaN(lng)) {
        currentLocation = { name, lat, lng, isOpen };
        updateLocationDisplay();
        saveLocationData();
        
        // Notify subscribers (in a real app, this would send emails)
        notifySubscribers();
        
        showMessage('Location updated successfully!', 'success');
        
        // Clear form
        this.reset();
    } else {
        showMessage('Please fill in all fields with valid data.', 'error');
    }
});

// Notify subscribers function
function notifySubscribers() {
    const subscribers = JSON.parse(localStorage.getItem('locationSubscribers') || '[]');
    const locationSubscribers = subscribers.filter(sub => 
        sub.notifications.includes('location')
    );
    
    console.log(`Notifying ${locationSubscribers.length} subscribers about location update:`, currentLocation);
    
    // In a real app, you would send emails or push notifications here
    // For demo purposes, we'll just log to console
    locationSubscribers.forEach(subscriber => {
        console.log(`Email to ${subscriber.email}: Monterey Sando Co is now at ${currentLocation.name} (${currentLocation.isOpen ? 'Open' : 'Closed'})`);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});
