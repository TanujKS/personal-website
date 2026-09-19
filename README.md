# Tanuj Siripurapu - Portfolio Website

A modern, component-based portfolio website built with Vue 3 and Vite.

## Project Structure

```
src/
├── assets/
│   └── main.css          # Main CSS with global styles and animations
├── components/
│   ├── Hero.vue          # Hero section with typed.js animation
│   ├── About.vue         # About section
│   ├── Contact.vue       # Contact page with contact card download
│   ├── Home.vue          # Home page composing the sections
│   └── Footer.vue        # Footer with contact info and social links
├── App.vue               # Main app component
└── main.js              # Vue app entry point
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

### Cloudflare Pages (Recommended)

This project is configured for automatic deployment on Cloudflare Pages via Git integration.

1. **Go to Cloudflare Dashboard**:
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages → Create a project

2. **Connect your Git repository**:
   - Choose "Connect to Git"
   - Select your repository and branch

3. **Configure build settings**:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

4. **Deploy**: Click "Save and Deploy"

5. **Automatic deployments**: Every push to your main branch will trigger a new deployment!

### Configuration

The `wrangler.toml` file handles:
- Build settings and Node.js version
- **SPA routing**: `not_found_handling = "single-page-application"` automatically serves `index.html` for all routes

### GitHub Pages (Legacy)

This project was previously deployed on GitHub Pages. The configuration has been updated for Cloudflare Pages, but if you need to deploy back to GitHub Pages:

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the `dist/` contents to your GitHub Pages branch
3. Ensure `404.html` and `.nojekyll` files are present

## Components

### Hero.vue
- **Purpose**: Main hero section with animated typing effect
- **Features**: 
  - Typed.js integration for dynamic text animation
  - Responsive design with Bootstrap grid system
  - Smooth hover effects on buttons
  - Mobile-first responsive breakpoints

- **Props**: None
- **Events**: None
- **Dependencies**: typed.js

### About.vue
- **Purpose**: About section with biography copy
- **Features**:
  - Two-column horizontal layout with image and content
  - Slide-in animations (left and right)
  - Responsive design with mobile-first approach
  - Section header with red accent line

- **Props**: None
- **Events**: None
- **Dependencies**: None

### Footer.vue
- **Purpose**: Footer section with contact information and social links
- **Features**:
  - Red background with white text for high contrast
  - Centered layout with name, location, and contact emails
  - Social media icons (GitHub, Instagram, LinkedIn)
  - Separator line with copyright information
  - Responsive design with mobile-optimized layout
  - Hover effects on social media icons

- **Props**: None
- **Events**: None
- **Dependencies**: Font Awesome (for social icons)

## Architecture & DRY Principles

### CSS Structure
- **`src/assets/main.css`**: Global styles, animations, and component-specific styles
- **Component-specific CSS**: Only unique styles for each component using `<style scoped>`
- **Bootstrap CDN**: Provides robust grid system and utility classes

### Benefits
- ✅ No CSS duplication across components
- ✅ Consistent styling and animations
- ✅ Easy maintenance and updates
- ✅ Professional Bootstrap grid system
- ✅ Centralized animation definitions
- ✅ Proper separation of concerns

### Grid System
- Bootstrap 5.3.0 responsive grid classes
- Mobile-first responsive breakpoints
- Consistent spacing and alignment utilities
- Proper horizontal layout on desktop, vertical on mobile

## Styling
- Uses Montserrat font family
- Responsive design with mobile-first approach
- CSS Grid and Flexbox for layout
- Smooth transitions and hover effects
- Consistent color scheme (#EF233C red, #414141 dark gray, #797979 light gray)

## Animations
- **Slide-in animations**: Left and right slide effects
- **Fade-in animations**: Smooth upward fade effects
- **Typed.js cursor**: Custom styled blinking cursor
- **Footer fade-in**: Smooth entrance animation

## Footer Features
- **Contact Information**: Two email addresses with proper spacing
- **Social Media Links**: GitHub, Instagram, and LinkedIn with hover effects
- **Responsive Layout**: Mobile-optimized with stacked email layout
- **Professional Styling**: Red background with white text and subtle separator line
- **External Links**: All social media links open in new tabs

## Next Steps
1. ✅ Hero component with typed.js
2. ✅ About section component
3. ✅ Footer component
4. ✅ Contact section component
5. 🔄 Navigation component
6. 🔄 Smooth scrolling and navigation

## Dependencies
- Vue 3.5.18
- typed.js 2.1.0
- Vite 7.0.6
- Bootstrap 5.3.0 (CDN)
- Font Awesome 6.4.0 (for social media and contact icons)
- Animate.css 4.1.1 (for smooth animations)

## Browser Support
- Modern browsers with ES6+ support
- Responsive design for all screen sizes
- CSS animations and transitions
