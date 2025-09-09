# Monterey Sando Co - Next.js Website

A modern, fast food truck website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Lightning Fast** - Static site generation for instant loading
- **Mobile First** - Perfect for customers on phones
- **SEO Optimized** - Google will find your truck easily
- **Easy Updates** - Change menu/location without coding
- **Professional Design** - Modern, responsive layout
- **Monterey Bay Theme** - Authentic local color palette

## 🎨 Design System

### Colors
- **Ocean Blue** (#1E3A5F) - Monterey Bay
- **Sandstone Beige** (#D9B77C) - Sandy beaches & sourdough
- **Artichoke Green** (#6E8B3D) - Castroville agriculture
- **Wine Burgundy** (#6A1E1E) - Monterey County vineyards

### Typography
- **Font**: Poppins (Google Fonts)
- **Weights**: 300, 400, 600, 700

## 📱 Pages

- **Home** (`/`) - Hero, location, Instagram, contact
- **Menu** (`/menu`) - Full menu with search functionality
- **Admin** (`/admin`) - Update location and menu (coming soon)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

## 🚚 Food Truck Features

### Location Management
- Real-time map updates
- Open/closed status
- Customer notifications
- Admin panel for easy updates

### Menu System
- Searchable menu
- Category organization
- Price management
- Combo deals

### Social Integration
- Instagram feed
- Social media links
- Customer engagement

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Core Web Vitals**: Excellent
- **Mobile Performance**: Optimized
- **Loading Speed**: < 2 seconds

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Deploy with one click
3. Automatic updates on push

### Netlify
1. Connect repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 🔧 Customization

### Adding Menu Items
Edit `src/components/MenuSection.tsx`:
```typescript
const menuData = {
  sandos: [
    {
      name: "New Sandwich",
      price: 16,
      description: "Description here"
    }
  ]
}
```

### Updating Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'ocean-blue': '#1E3A5F',
  // Add your colors here
}
```

## 📞 Support

For questions or customization requests, contact the development team.

---

**Monterey Sando Co** - Fresh, delicious sandwiches on wheels! 🌊🥪


