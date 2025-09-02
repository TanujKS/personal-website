# Deployment Guide - Cloudflare Pages

## Overview

This project is configured for automatic deployment on Cloudflare Pages via Git integration, which provides:
- Global CDN with edge locations worldwide
- Automatic HTTPS
- Built-in analytics
- Custom domain support
- **Automatic deployments on every Git push**

## Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **Node.js**: Version 20.19.0 or higher (as specified in package.json)
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Deployment Steps

### Automatic Deployment (Recommended)

1. **Connect your Git repository**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Pages → Create a project
   - Choose "Connect to Git"
   - Select your repository

2. **Configure build settings**:
   - **Framework preset**: None
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave empty)

3. **Environment variables** (if needed):
   - Add any environment variables your app requires

4. **Deploy**: Click "Save and Deploy"

5. **Automatic deployments**: Every push to your main branch will trigger a new deployment!

## Configuration Files

### `wrangler.toml`
Cloudflare Pages configuration with:
- Project name and compatibility settings
- Build command and output directory
- **SPA routing**: `not_found_handling = "single-page-application"` handles all routes

### `.cfignore`
Excludes unnecessary files from deployment:
- `node_modules/`
- Build artifacts
- Development files

## How SPA Routing Works

The `not_found_handling = "single-page-application"` setting in `wrangler.toml` automatically:
- Serves `index.html` for any route that doesn't exist
- Allows Vue Router to handle client-side routing
- No need for manual redirect rules

## Portfolio Project Redirects

Since you're using SPA routing, your portfolio project redirects (like `/droplet`, `/facade`, etc.) can be handled in two ways:

1. **Client-side redirects** in your Vue components
2. **Server-side redirects** by adding specific rules in Cloudflare Pages dashboard if needed

## Custom Domain Setup

1. **Add custom domain** in Cloudflare Pages dashboard
2. **Update DNS records** if using external DNS provider
3. **SSL/TLS settings** are automatically configured

## Environment Variables

If you need environment variables:
1. Add them in Cloudflare Pages dashboard
2. Or create a `.env` file (ensure it's in `.cfignore`)

## Troubleshooting

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check build logs in Cloudflare dashboard

### Routing Issues
- Verify `not_found_handling = "single-page-application"` is set in `wrangler.toml`
- Check that your Vue Router is properly configured

### Performance Issues
- Check Cloudflare analytics
- Verify assets are being served from CDN
- Monitor Core Web Vitals

## Monitoring

- **Analytics**: Built into Cloudflare Pages dashboard
- **Performance**: Real User Monitoring (RUM) available
- **Deployments**: Automatic deployment history and rollback options

## Rollback

- Previous deployments are automatically saved
- Rollback via Cloudflare Pages dashboard
- Each Git commit creates a new deployment

## Support

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Community Forum](https://community.cloudflare.com/)
