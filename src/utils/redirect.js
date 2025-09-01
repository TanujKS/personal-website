const DEBUG_CONTACT_CARD = true

export function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Comprehensive redirect configuration object
const REDIRECT_CONFIG = {
    // Contact card redirects (from contact-card.html)
    'contact-card': {
        localStorageKey: 'contactCardOpened',
        redirectOnce: (!DEBUG_CONTACT_CARD), // Only redirect once per session
        action: () => {
            // Force download of VCF file
            const link = document.createElement('a');
            link.href = '/Tanuj Siripurapu.vcf';
            link.download = 'Tanuj Siripurapu.vcf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },
        description: 'Downloads contact card VCF file',
        type: 'download'
    },
    
    // Portfolio project redirects
    'droplet': {
        localStorageKey: 'dropletRedirected',
        redirectOnce: false, // Always redirect when accessed directly
        action: () => {
            window.location.href = 'https://youtu.be/bDuVqdedkZA';
        },
        description: 'Redirects to Droplet YouTube video',
        type: 'external'
    },
    
    'facade': {
        localStorageKey: 'facadeRedirected',
        redirectOnce: false, // Always redirect when accessed directly
        action: () => {
            window.location.href = 'https://www.youtube.com/watch?v=YABhQ6WrWmk';
        },
        description: 'Redirects to Facade YouTube video',
        type: 'external'
    },
    
    'protected': {
        localStorageKey: 'protectedRedirected',
        redirectOnce: false, // Always redirect when accessed directly
        action: () => {
            window.location.href = 'https://devpost.com/software/protected/';
        },
        description: 'Redirects to Protected Devpost page',
        type: 'external'
    },
    
    'writeright': {
        localStorageKey: 'writerightRedirected',
        redirectOnce: false, // Always redirect when accessed directly
        action: () => {
            window.location.href = 'https://devpost.com/software/writeright-pq8ihr';
        },
        description: 'Redirects to WriteRight Devpost page',
        type: 'external'
    },
    
    'zeroresponders': {
        localStorageKey: 'zerorespondersRedirected',
        redirectOnce: false, // Always redirect when accessed directly
        action: () => {
            window.location.href = 'https://devpost.com/software/zeroresponders';
        },
        description: 'Redirects to ZeroResponders Devpost page',
        type: 'external'
    }
};

// Function to handle direct route redirects (e.g., /facade, /droplet)
export function handleDirectRouteRedirect(redirectId) {
    const redirectConfig = REDIRECT_CONFIG[redirectId];
    
    if (!redirectConfig) {
        console.warn(`Unknown redirect type: ${redirectId}`);
        return;
    }
    
    // For direct routes, check localStorage only if redirectOnce is true
    if (redirectConfig.redirectOnce) {
        const isAlreadyHandled = localStorage.getItem(redirectConfig.localStorageKey);
        if (isAlreadyHandled) {
            console.log(`⏭️ Direct route redirect ${redirectId} already handled, skipping`);
            return;
        }
    }
    
    console.log(`🚀 Executing direct route redirect: ${redirectId}`);
    console.log(`📝 Description: ${redirectConfig.description}`);
    console.log(`🔗 Type: ${redirectConfig.type}`);
    console.log(`🔄 Redirect once: ${redirectConfig.redirectOnce}`);
    
    try {
        // Execute the redirect action
        redirectConfig.action();
        
        // Only save to localStorage if redirectOnce is true
        if (redirectConfig.redirectOnce) {
            localStorage.setItem(redirectConfig.localStorageKey, 'true');
        }
        
        console.log(`✅ Direct route redirect ${redirectId} completed successfully`);
        
    } catch (error) {
        console.error(`❌ Error executing direct route redirect ${redirectId}:`, error);
    }
}

// Utility function to get all available redirect types
export function getAvailableRedirects() {
    return Object.keys(REDIRECT_CONFIG).map(key => ({
        id: key,
        description: REDIRECT_CONFIG[key].description,
        type: REDIRECT_CONFIG[key].type,
        redirectOnce: REDIRECT_CONFIG[key].redirectOnce
    }));
}
