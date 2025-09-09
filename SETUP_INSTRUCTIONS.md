# Monterey Sando Co Website Setup Instructions

## Security Fix Applied ✅

The exposed Google Maps API key has been removed from the HTML file and moved to a secure configuration system.

## Required Setup

### 1. Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select existing one
3. Enable the "Maps JavaScript API"
4. Create credentials (API Key)
5. **IMPORTANT**: Restrict the API key to your domain for security
6. Open `config.js` and replace `YOUR_GOOGLE_MAPS_API_KEY_HERE` with your actual API key

### 2. MailChimp Integration

1. Log into your MailChimp account
2. Go to Audience > Signup forms > Embedded forms
3. Choose "Naked" or "Classic" form
4. Copy the form action URL and audience ID
5. Open `config.js` and replace:
   - `https://YOUR_MAILCHIMP_URL` with your form action URL
   - `YOUR_MAILCHIMP_ID` with your audience ID

### 3. File Structure

```
Monterey Sando Co website/
├── index.html          # Main website file
├── menu.html           # Menu page
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── config.js           # Configuration file (API keys, etc.)
├── logo.png            # Company logo
└── SETUP_INSTRUCTIONS.md # This file
```

## Security Features

- ✅ API keys are no longer exposed in HTML
- ✅ Configuration is centralized in `config.js`
- ✅ Fallback messages when API keys are not configured
- ✅ Error handling for missing API keys

## Testing

1. Open `index.html` in a web browser
2. Check browser console for any configuration warnings
3. Test the location map functionality
4. Test the MailChimp signup form

## Next Steps

1. Set up your Google Maps API key
2. Configure your MailChimp account
3. Update the contact information in `config.js`
4. Test all functionality
5. Deploy to your web hosting service

## Support

If you need help with any of these steps, the configuration is now much more secure and easier to manage!
