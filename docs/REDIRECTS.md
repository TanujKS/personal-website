# Redirect System Documentation

This document describes the modern, configurable redirect system that replaces the old individual HTML redirect files.

## Overview

The new redirect system consolidates all redirects into a single, maintainable configuration object in `src/utils/redirect.js`. It supports direct route redirects with Vue Router integration, localStorage tracking, and provides a clean API for adding new redirects.

## How It Works

### 1. Direct Route Redirects (Only Method)
The system now supports direct URL routes that automatically trigger redirects:
- `tanuj.xyz/contact-card` → Downloads VCF file
- `tanuj.xyz/droplet` → Redirects to Droplet YouTube video
- `tanuj.xyz/facade` → Redirects to Facade YouTube video
- `tanuj.xyz/protected` → Redirects to Protected Devpost page
- `tanuj.xyz/writeright` → Redirects to WriteRight Devpost page
- `tanuj.xyz/zeroresponders` → Redirects to ZeroResponders Devpost page

**Important**: Direct route redirects respect the `redirectOnce` configuration:
- **`redirectOnce: false`** (like `/facade`, `/droplet`) → Always redirect, never save to localStorage
- **`redirectOnce: true`** (like `/contact-card`) → Only redirect once per session, save to localStorage

### 2. Automatic Execution
Redirects are automatically executed when direct routes are accessed via Vue Router, with no additional setup required.

## Available Redirects

| Redirect ID | Type | Direct Route | Redirect Once | Description | Action |
|-------------|------|--------------|---------------|-------------|---------|
| `contact-card` | download | `/contact-card` | ✅ Yes | Downloads contact card VCF file | Forces download of VCF |
| `droplet` | external | `/droplet` | ❌ No | Redirects to Droplet YouTube video | External link to YouTube |
| `facade` | external | `/facade` | ❌ No | Redirects to Facade YouTube video | External link to YouTube |
| `protected` | external | `/protected` | ❌ No | Redirects to Protected Devpost page | External link to Devpost |
| `writeright` | external | `/writeright` | ❌ No | Redirects to WriteRight Devpost page | External link to Devpost |
| `zeroresponders` | external | `/zeroresponders` | ❌ No | Redirects to ZeroResponders Devpost page | External link to Devpost |

## Adding New Redirects

To add a new redirect, you need to:

1. **Add it to the `REDIRECT_CONFIG` object** in `src/utils/redirect.js`:
```javascript
'new-redirect-id': {
    localStorageKey: 'newRedirectOpened',
    redirectOnce: false, // false = always redirect, true = redirect once per session
    action: () => {
        // Your custom redirect logic here
        window.location.href = 'https://example.com';
        // or download a file, show a modal, etc.
    },
    description: 'Description of what this redirect does',
    type: 'external' // 'external', 'internal', or 'download'
}
```

2. **Add the route** in `src/router/index.js`:
```javascript
{
    path: '/new-redirect-id',
    name: 'NewRedirect',
    beforeEnter: (to, from, next) => {
        handleDirectRouteRedirect('new-redirect-id')
        next('/')
    }
}
```

### Redirect Types

- **`external`**: Redirects to external websites
- **`internal`**: Redirects within the same site
- **`download`**: Triggers file downloads

### Redirect Once Behavior

- **`redirectOnce: true`**: The redirect will only execute once per session. After the first redirect, localStorage prevents subsequent redirects until cleared.
- **`redirectOnce: false`**: The redirect will execute every time the route is accessed, regardless of localStorage state.

## localStorage Tracking

Each redirect automatically tracks whether it has been executed using localStorage, but only when `redirectOnce: true`:
- **`redirectOnce: true`**: Prevents duplicate redirects on page refresh
- **`redirectOnce: false`**: Never saves to localStorage, always redirects
- Uses unique keys for each redirect type
- Can be cleared using the debug panel

## Debug Features

### Development Mode
The debug panel automatically appears in development mode (`import.meta.env.DEV`).

### Manual Debug Mode
Add `?debug=true` to any URL to show the debug panel:
```
/?debug=true
/contact-card?debug=true
/droplet?debug=true
```

### Debug Panel Features
- Shows current URL and parameters
- Lists all available redirects with their `redirectOnce` status
- Provides test buttons for each redirect
- Allows clearing redirect history
- Shows redirect types, descriptions, and redirect once behavior

## Testing Redirects

### Method 1: Direct Routes (Only Method)
```
/contact-card  (redirects once per session)
/droplet      (always redirects)
/facade       (always redirects)
/protected    (always redirects)
/writeright   (always redirects)
/zeroresponders (always redirects)
```

### Method 2: Debug Panel
Use the debug panel buttons to test redirects without manually typing URLs.

## File Structure

```
src/
├── router/
│   └── index.js              # Vue Router configuration with redirect routes
├── utils/
│   └── redirect.js           # Main redirect configuration and logic
├── composables/
│   └── useRedirect.js        # Vue composable for redirect functionality
└── components/
    ├── Home.vue              # Main home page component
    └── RedirectDebug.vue     # Debug component for development
```

## Migration from Old System

The old redirect files are no longer needed:
- ❌ `droplet.html` → ✅ `/droplet`
- ❌ `facade.html` → ✅ `/facade`
- ❌ `protected.html` → ✅ `/protected`
- ❌ `writeright.html` → ✅ `/writeright`
- ❌ `zeroresponders.html` → ✅ `/zeroresponders`
- ❌ `contact-card.html` → ✅ `/contact-card`

## Benefits of New System

1. **Direct Routes**: Clean URLs like `/facade` instead of query parameters
2. **Flexible Behavior**: Choose between "redirect once" or "always redirect" per redirect type
3. **Centralized**: All redirects in one place
4. **Configurable**: Easy to add/modify redirects
5. **Type-safe**: Clear categorization of redirect types
6. **Trackable**: Automatic localStorage tracking when needed
7. **Debuggable**: Built-in debug tools
8. **Maintainable**: No more individual HTML files
9. **Vue-native**: Properly integrated with Vue Router
10. **Extensible**: Easy to add new features
11. **SEO-friendly**: Clean, bookmarkable URLs
12. **Simplified**: No query parameter complexity

## Use Cases

### Always Redirect (`redirectOnce: false`)
- **Portfolio links** like `/facade`, `/droplet` - users should always be redirected to the external content
- **External resources** that don't need session tracking
- **Public links** that should work every time they're accessed

### Redirect Once (`redirectOnce: true`)
- **Downloads** like `/contact-card` - prevent multiple downloads in the same session
- **Internal actions** that should only happen once per session
- **User-specific actions** that need session tracking

## Troubleshooting

### Redirect Not Working?
1. Check browser console for error messages
2. Verify the redirect ID exists in `REDIRECT_CONFIG`
3. Check if the route is properly configured in the router
4. Check if localStorage is blocked
5. Use debug panel to test redirects
6. Verify the `redirectOnce` setting matches your intended behavior

### Clearing Redirect History
Use the "Clear All Redirect History" button in the debug panel to reset all redirect tracking.

### Adding Custom Logic
Modify the `action` function in the redirect configuration to implement custom behavior beyond simple redirects.

### Router Issues
Make sure Vue Router is properly installed and configured. The redirect system depends on Vue Router for direct route handling.

### Understanding Redirect Once Behavior
- **`redirectOnce: false`**: Direct routes like `/facade` will always redirect, never save to localStorage
- **`redirectOnce: true`**: Direct routes like `/contact-card` will only redirect once per session
- **No query parameters**: The system only supports direct route redirects
