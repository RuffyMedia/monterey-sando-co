// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !isExpanded);
});

// Keyboard support for hamburger menu
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
}));





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

// Performance monitoring and error handling
window.addEventListener('load', function() {
    // Log performance metrics
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
    }
    
    // Check if critical resources loaded
    const criticalImages = document.querySelectorAll('img[loading="eager"]');
    criticalImages.forEach(img => {
        if (!img.complete) {
            console.warn('Critical image failed to load:', img.src);
        }
    });
});

// Error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Image failed to load:', e.target.src);
        // Could implement fallback image logic here
    }
});

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js')
        //     .then(registration => console.log('SW registered'))
        //     .catch(error => console.log('SW registration failed'));
    });
}

// Enhanced Analytics Tracking
function trackEvent(eventName, parameters = {}) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, parameters);
    }
    
    // Vercel Analytics event tracking
    if (typeof window.va !== 'undefined') {
        window.va('event', eventName, parameters);
    }
    
    console.log('Analytics Event:', eventName, parameters);
}

// Track navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const linkText = this.textContent.trim();
        trackEvent('navigation_click', {
            link_text: linkText,
            link_href: this.getAttribute('href'),
            section: this.closest('nav') ? 'main_nav' : 'mobile_nav'
        });
    });
});

// Track Instagram link clicks
document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.addEventListener('click', function() {
        trackEvent('instagram_click', {
            link_text: this.textContent.trim(),
            link_href: this.getAttribute('href')
        });
    });
});

// Track menu item interactions (if you add hover/click events)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const itemName = this.querySelector('h4')?.textContent || 'Unknown Item';
        trackEvent('menu_item_hover', {
            item_name: itemName,
            category: this.closest('.menu-category')?.querySelector('.category-title')?.textContent || 'Unknown'
        });
    });
});

// Track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', function() {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        if (maxScrollDepth % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            trackEvent('scroll_depth', {
                depth_percentage: maxScrollDepth
            });
        }
    }
});

// Track page load time
window.addEventListener('load', function() {
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        const loadTime = Math.round(perfData.loadEventEnd - perfData.loadEventStart);
        
        trackEvent('page_load_time', {
            load_time_ms: loadTime,
            page_title: document.title
        });
    }
});

// Basic Security Measures (Free Plan Compatible)
// Rate limiting for form submissions (client-side)
const formSubmissionTracker = {
    submissions: new Map(),
    maxSubmissions: 5, // Max 5 submissions per minute per IP
    windowMs: 60000 // 1 minute window
};

function checkRateLimit(identifier) {
    const now = Date.now();
    const userSubmissions = formSubmissionTracker.submissions.get(identifier) || [];
    
    // Remove old submissions outside the window
    const recentSubmissions = userSubmissions.filter(time => now - time < formSubmissionTracker.windowMs);
    
    if (recentSubmissions.length >= formSubmissionTracker.maxSubmissions) {
        console.warn('Rate limit exceeded for:', identifier);
        return false;
    }
    
    // Add current submission
    recentSubmissions.push(now);
    formSubmissionTracker.submissions.set(identifier, recentSubmissions);
    return true;
}

// Basic bot detection (simple heuristics)
function detectBot() {
    const userAgent = navigator.userAgent.toLowerCase();
    const botPatterns = [
        'bot', 'crawler', 'spider', 'scraper', 'curl', 'wget',
        'python', 'java', 'php', 'ruby', 'perl'
    ];
    
    return botPatterns.some(pattern => userAgent.includes(pattern));
}

// Log suspicious activity
if (detectBot()) {
    console.log('Bot detected, limiting functionality');
    // You could disable certain features for bots here
}

// Basic DDoS protection (client-side)
let requestCount = 0;
const maxRequests = 100; // Max 100 requests per minute
const requestWindow = 60000; // 1 minute

setInterval(() => {
    requestCount = 0; // Reset counter every minute
}, requestWindow);

function checkRequestLimit() {
    if (requestCount > maxRequests) {
        console.warn('Too many requests detected');
        return false;
    }
    requestCount++;
    return true;
}

// Monitor for suspicious behavior
let clickCount = 0;
let lastClickTime = 0;

document.addEventListener('click', function(e) {
    const now = Date.now();
    
    // Reset counter if more than 1 second between clicks
    if (now - lastClickTime > 1000) {
        clickCount = 0;
    }
    
    clickCount++;
    lastClickTime = now;
    
    // Alert if too many rapid clicks (potential bot)
    if (clickCount > 10) {
        console.warn('Suspicious rapid clicking detected');
        trackEvent('suspicious_activity', {
            type: 'rapid_clicking',
            click_count: clickCount
        });
    }
});

// Basic content security
function sanitizeInput(input) {
    return input
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/javascript:/gi, '') // Remove javascript: URLs
        .replace(/on\w+\s*=/gi, ''); // Remove event handlers
}

// Monitor console for errors (potential attacks)
const originalError = console.error;
console.error = function(...args) {
    // Log potential security issues
    if (args.some(arg => typeof arg === 'string' && 
        (arg.includes('XSS') || arg.includes('injection') || arg.includes('attack')))) {
        trackEvent('security_alert', {
            type: 'console_error',
            message: args.join(' ')
        });
    }
    originalError.apply(console, args);
};
