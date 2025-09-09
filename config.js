// Configuration file for Monterey Sando Co website
// IMPORTANT: Replace these placeholder values with your actual API keys and credentials

const CONFIG = {
    // Google Maps API Key
    // Get your API key from: https://console.cloud.google.com/google/maps-apis
    // Make sure to restrict it to your domain for security
    GOOGLE_MAPS_API_KEY: 'AIzaSyDBay0c2s_BsBojKdz2wXT3B5O7_P-KtQY',
    
    // Instagram Configuration
    INSTAGRAM: {
        USERNAME: 'montereysandoco'
    },
    
    // Contact Information
    CONTACT: {
        PHONE: '(555) 123-SANDO',
        EMAIL: 'hello@montereysandoco.com',
        INSTAGRAM: '@montereysandoco'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
