# SCSS Setup Instructions

## Installation Required

To use SCSS files in this project, you need to install the `sass` package:

```bash
npm install -D sass
```

## What's Been Done

1. ✅ Created `src/styles/index.scss` with enhanced styles including:
   - SCSS variables for fonts
   - Mixins for reusable button and hover effects
   - Hotel room image container styles
   - Room card styles with hover effects
   - Gallery grid layout

2. ✅ Updated `src/main.tsx` to import SCSS instead of CSS

3. ✅ Created `src/components/RoomCard.tsx` component for displaying hotel rooms

4. ✅ Added hotel room showcase section to Home page with beautiful images from Unsplash:
   - Deluxe Ocean View Suite ($299/night)
   - Presidential Suite ($1,299/night)
   - Executive Business Suite ($599/night)

## After Installing Sass

Once you run `npm install -D sass`, you can:

1. Start the development server: `npm run dev`
2. The SCSS will automatically compile to CSS
3. All room images and styles will work perfectly

## SCSS Features Added

- **Variables**: `$font-primary`, `$font-heading`
- **Mixins**: `@mixin button-base`, `@mixin hover-lift`
- **Room Styles**: `.room-card`, `.room-image-container`, `.gallery-grid`
- **Hover Effects**: Image zoom on hover, overlay animations
- **Responsive Grid**: Auto-fit gallery layout

## Old CSS File

You can safely delete `src/styles/index.css` after confirming SCSS works.
