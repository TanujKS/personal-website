# Tanuj Siripurapu - Portfolio Website

A modern, component-based portfolio website built with Vue 3 and Vite.

## Project Structure

```
src/
├── assets/
│   └── main.css          # Main CSS with global styles and animations
├── components/
│   ├── Hero.vue          # Hero section with typed.js animation
│   ├── About.vue         # About section with skills and progress bars
│   ├── Portfolio.vue     # Portfolio section with filter functionality
│   ├── Experience.vue    # Experience timeline with awards & recognition
│   └── Footer.vue        # Footer with contact info and social links
├── App.vue               # Main app component
└── main.js              # Vue app entry point
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the portfolio images to the public/img/ directory:
   ```bash
   mkdir -p public/img
   cp ../img/portfolio-*.png public/img/
   cp ../img/portfolio-*.jpg public/img/
   cp ../img/portfolio-*.PNG public/img/
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
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
- **Purpose**: About section with skills and experience
- **Features**:
  - Two-column horizontal layout with image and content
  - Animated progress bars for skills
  - Slide-in animations (left and right)
  - Responsive design with mobile-first approach
  - Section header with red accent line
  - Proper skill item grouping and spacing

- **Props**: None
- **Events**: None
- **Dependencies**: None

### Portfolio.vue
- **Purpose**: Portfolio section with project showcase and filtering
- **Features**:
  - Interactive filter buttons (All, Organizations, Projects)
  - Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
  - Project cards with hover effects
  - External link buttons with Font Awesome icons
  - Fade-in animations for cards
  - Real-time filtering without page reload
  - 9 projects with proper categorization

- **Props**: None
- **Events**: None
- **Dependencies**: Font Awesome (for icons)

### Experience.vue
- **Purpose**: Experience timeline with awards and recognition
- **Features**:
  - Vertical timeline with alternating left/right layout
  - Red timeline line with circular markers
  - Scroll-triggered slide-in animations (left and right)
  - Responsive design that stacks vertically on mobile
  - 7 awards with proper chronological ordering
  - Professional timeline styling with shadows and borders

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
- **Progress bar animations**: Staggered skill bar animations
- **Typed.js cursor**: Custom styled blinking cursor
- **Portfolio filtering**: Smooth transitions between filter states
- **Timeline animations**: Scroll-triggered slide-in effects for timeline items
- **Footer fade-in**: Smooth entrance animation

## Portfolio Features
- **Filter Categories**: Organizations (filter-1) and Projects (filter-2)
- **Project Cards**: Each with title, role, date, description, logo, and external link
- **Responsive Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Hover Effects**: Button color transitions and card shadows
- **External Links**: All projects link to their respective websites

## Experience Timeline Features
- **Timeline Structure**: Vertical red line with circular markers
- **Alternating Layout**: Left and right positioning for visual balance
- **Award Categories**: Hackathon wins, competitions, academic achievements
- **Responsive Design**: Stacks vertically on mobile devices
- **Scroll-Triggered Animations**: Staggered slide-in effects for each timeline item

## Footer Features
- **Contact Information**: Two email addresses with proper spacing
- **Social Media Links**: GitHub, Instagram, and LinkedIn with hover effects
- **Responsive Layout**: Mobile-optimized with stacked email layout
- **Professional Styling**: Red background with white text and subtle separator line
- **External Links**: All social media links open in new tabs

## Next Steps
1. ✅ Hero component with typed.js
2. ✅ About section component
3. ✅ Portfolio/Projects component
4. ✅ Experience timeline component
5. ✅ Footer component
6. 🔄 Contact section component
7. 🔄 Navigation component
8. 🔄 Smooth scrolling and navigation
9. 🔄 Portfolio modal functionality

## Dependencies
- Vue 3.5.18
- typed.js 2.1.0
- Vite 7.0.6
- Bootstrap 5.3.0 (CDN)
- Font Awesome 6.4.0 (for portfolio icons and social media icons)
- Animate.css 4.1.1 (for smooth animations)

## Browser Support
- Modern browsers with ES6+ support
- Responsive design for all screen sizes
- CSS animations and transitions
