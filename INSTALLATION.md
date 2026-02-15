# Installation Guide

## Quick Start

Follow these steps to get the Royal Enterprise website running on your machine:

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- react & react-dom
- react-router-dom
- framer-motion
- typescript
- vite
- tailwindcss
- And all other dependencies

### Step 2: Start Development Server

After installation completes, start the dev server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Step 3: Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Step 4: Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors

If you see module errors, ensure all dependencies are installed:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

The TypeScript errors you see in the IDE will resolve once dependencies are installed.

## System Requirements

- Node.js 16.x or higher
- npm 7.x or higher (or yarn 1.22.x or higher)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## Development Tips

1. **Hot Module Replacement**: Vite provides instant HMR - changes appear immediately
2. **TypeScript**: Full type checking is enabled
3. **Tailwind CSS**: Use the Tailwind IntelliSense extension for VS Code
4. **Animations**: Framer Motion provides smooth animations throughout

## Next Steps

After installation:
1. Explore the pages at different routes
2. Test responsive design on mobile devices
3. Customize colors in `tailwind.config.js`
4. Modify content in page components
5. Add your own branding and images

Enjoy building with Royal Enterprise! 👑
