# Analytics Setup Guide for Monterey Sando Co

## 🎯 Overview

Your website now has comprehensive analytics tracking set up for both Vercel Analytics and Google Analytics 4. This will help you understand your customers and optimize your food truck business.

## 📊 What's Included

### Vercel Analytics (Automatic)
- ✅ **Page views** and unique visitors
- ✅ **Performance metrics** (Core Web Vitals)
- ✅ **Geographic data** (where your customers are)
- ✅ **Device information** (mobile vs desktop)
- ✅ **Referral sources** (how people find you)

### Google Analytics 4 (Requires Setup)
- ✅ **Detailed user behavior** tracking
- ✅ **Custom events** (menu interactions, navigation clicks)
- ✅ **Conversion tracking** (Instagram clicks, contact interactions)
- ✅ **Audience insights** (age, interests, location)
- ✅ **E-commerce tracking** (if you add online ordering)

## 🚀 Setup Instructions

### 1. Vercel Analytics (Already Working!)

When you deploy to Vercel, analytics will automatically start working. No setup required!

**To view Vercel Analytics:**
1. Go to your Vercel dashboard
2. Select your project
3. Click on the "Analytics" tab
4. View real-time and historical data

### 2. Google Analytics 4 Setup

**Step 1: Create Google Analytics Account**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Click "Start measuring"
3. Create an account for "Monterey Sando Co"
4. Set up a property for your website
5. Choose "Web" as your platform
6. Enter your website URL: `https://your-domain.com`

**Step 2: Get Your Measurement ID**
1. In Google Analytics, go to "Admin" (gear icon)
2. Under "Property", click "Data Streams"
3. Click on your web stream
4. Copy the "Measurement ID" (looks like: G-XXXXXXXXXX)

**Step 3: Update Your Website**
1. Open `config.js` in your project
2. Replace `GA_MEASUREMENT_ID` with your actual Measurement ID:
   ```javascript
   ANALYTICS: {
       GOOGLE_ANALYTICS_ID: 'G-XXXXXXXXXX', // Replace with your actual ID
       VERCEL_ANALYTICS: true
   }
   ```

**Step 4: Deploy and Test**
1. Commit and push your changes
2. Deploy to Vercel
3. Visit your website
4. Check Google Analytics for real-time data

## 📈 What You'll Track

### Automatic Events
- **Page views** - Every time someone visits your site
- **Session duration** - How long people stay
- **Bounce rate** - How many people leave immediately
- **Traffic sources** - Where visitors come from

### Custom Events (Already Set Up)
- **Navigation clicks** - Which menu items people click
- **Instagram clicks** - Social media engagement
- **Menu item hovers** - Which food items get attention
- **Scroll depth** - How far people scroll
- **Page load time** - Site performance

## 🎯 Key Metrics for Food Trucks

### Most Important Metrics
1. **Traffic by location** - Where are your customers?
2. **Mobile vs Desktop** - Are people on phones?
3. **Peak hours** - When do people visit your site?
4. **Instagram engagement** - Social media effectiveness
5. **Menu interest** - Which items are most popular?

### Business Insights
- **Customer behavior** - How people navigate your site
- **Popular content** - Which sections get most attention
- **Conversion tracking** - Instagram follows, contact clicks
- **Performance** - Site speed and user experience

## 🔧 Advanced Configuration

### Custom Events (Optional)
You can add more tracking by calling the `trackEvent()` function:

```javascript
// Track when someone clicks a specific button
trackEvent('contact_click', {
    button_type: 'phone',
    location: 'footer'
});

// Track menu category views
trackEvent('menu_category_view', {
    category: 'Signature Sandos',
    item_count: 6
});
```

### Goals and Conversions
Set up goals in Google Analytics for:
- Instagram profile visits
- Contact form submissions
- Menu section views
- Location page visits

## 📱 Mobile Analytics

Your analytics are optimized for mobile users since most food truck customers use phones. You'll see:
- **Mobile traffic percentage**
- **Mobile user behavior**
- **App-like experience metrics** (PWA features)

## 🚨 Privacy Compliance

Your analytics setup includes:
- ✅ **GDPR compliance** - No personal data collection
- ✅ **Cookie consent** - Optional cookie banner (can be added)
- ✅ **Data anonymization** - IP addresses are anonymized
- ✅ **User privacy** - No tracking of personal information

## 📊 Viewing Your Data

### Vercel Analytics
- Real-time visitor count
- Performance metrics
- Geographic distribution
- Device breakdown

### Google Analytics 4
- Detailed user journeys
- Custom event tracking
- Audience demographics
- Conversion funnels

## 🎉 Next Steps

1. **Set up Google Analytics** (follow steps above)
2. **Deploy to Vercel** to activate Vercel Analytics
3. **Wait 24-48 hours** for data to populate
4. **Check your dashboards** regularly
5. **Optimize based on data** - Update content based on what works

## 🆘 Troubleshooting

**No data showing up?**
- Check that your Measurement ID is correct
- Ensure the website is deployed to Vercel
- Wait 24-48 hours for data to appear
- Check browser console for errors

**Need help?**
- Google Analytics Help Center
- Vercel Analytics Documentation
- Check the browser console for error messages

---

Your food truck website now has professional-grade analytics! 🚚📊
