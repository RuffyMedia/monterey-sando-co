// Configuration file for Monterey Sando Co website
// IMPORTANT: Replace these placeholder values with your actual API keys and credentials

const CONFIG = {
    // Instagram Configuration
    INSTAGRAM: {
        USERNAME: 'montereysandoco'
    },
    
    // Contact Information
    CONTACT: {
        PHONE: '(555) 123-SANDO',
        EMAIL: 'montereysandoco@gmail.com',
        INSTAGRAM: '@montereysandoco'
    },
    
    // Analytics Configuration
    ANALYTICS: {
        // Replace with your actual Google Analytics Measurement ID
        GOOGLE_ANALYTICS_ID: 'GA_MEASUREMENT_ID',
        // Vercel Analytics is automatically enabled when deployed to Vercel
        VERCEL_ANALYTICS: true
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
