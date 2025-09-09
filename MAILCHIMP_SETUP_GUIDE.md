# MailChimp Setup Guide for Monterey Sando Co

## 🎯 Goal
Set up an embedded signup form for location updates that integrates with your website.

## Step 1: Create MailChimp Account
1. Go to [mailchimp.com](https://mailchimp.com)
2. Sign up for a free account
3. Complete the account setup process

## Step 2: Create Your Audience
1. In MailChimp dashboard, go to **Audience** → **All contacts**
2. Click **Create Audience** → **Create an audience**
3. Fill in:
   - **Audience name**: "Monterey Sando Co Subscribers"
   - **Default from email**: hello@montereysandoco.com
   - **Default from name**: Monterey Sando Co
   - **Remind people how they signed up**: "You signed up for location updates on our website"

## Step 3: Set Up Interest Groups
1. Go to **Audience** → **Settings** → **Audience fields and |MERGE| tags**
2. Click **Groups** → **Create groups**
3. Create a group called **"Notification Preferences"** with these options:
   - Location updates
   - Hours changes
   - Special events
   - Menu updates
4. Save the group

## Step 4: Create Embedded Signup Form
1. Go to **Audience** → **Signup forms** → **Embedded forms**
2. Choose **"Naked"** style for better customization
3. Configure form fields:
   - ✅ **Email address** (required)
   - ✅ **First name** (optional)
   - ✅ **Last name** (optional)
   - ✅ **Notification Preferences** (your interest group)

## Step 5: Get Your Form Code
1. After configuring, MailChimp will show you code like this:
```html
<form action="https://YOUR_ACCOUNT.us21.list-manage.com/subscribe/post?u=YOUR_USER_ID&id=YOUR_LIST_ID" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
```

2. **Copy these values** from your form code:
   - **Form Action URL**: The entire `action` attribute
   - **User ID**: The part after `u=` and before `&id=`
   - **List ID**: The part after `id=`
   - **Group ID**: The number in `group[12345]` (if you see it)

## Step 6: Update Your Website Config
1. Open `config.js` in your website folder
2. Replace these placeholder values with your actual MailChimp data:

```javascript
MAILCHIMP: {
    FORM_ACTION_URL: 'https://YOUR_ACTUAL_FORM_ACTION_URL',
    AUDIENCE_ID: 'YOUR_ACTUAL_USER_ID',
    LIST_ID: 'YOUR_ACTUAL_LIST_ID',
    GROUP_ID: 'YOUR_ACTUAL_GROUP_ID'
}
```

## Step 7: Test Your Form
1. Open your website in a browser
2. Go to the "Find Our Truck" section
3. Try signing up with a test email
4. Check your MailChimp audience to see if the signup worked

## Step 8: Customize Email Templates (Optional)
1. Go to **Templates** in MailChimp
2. Create a welcome email template
3. Set up automated emails for location updates

## 🎉 You're Done!
Your website now has a fully functional MailChimp signup form for location updates!

## Troubleshooting
- **Form not working?** Check that all IDs in config.js match your MailChimp form
- **No emails received?** Check your spam folder and verify the form action URL
- **Styling issues?** The form uses your website's existing CSS classes

## Next Steps
- Set up automated location update campaigns
- Create email templates for different notification types
- Consider adding SMS marketing for instant location alerts
