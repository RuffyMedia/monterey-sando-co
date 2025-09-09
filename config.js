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
        EMAIL: 'hello@montereysandoco.com',
        INSTAGRAM: '@montereysandoco'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
