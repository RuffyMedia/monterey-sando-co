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
});


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
