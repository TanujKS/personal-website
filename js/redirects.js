// Centralized redirect handler
const redirects = {
    'writeright': 'https://devpost.com/software/writeright-pq8ihr',
    'protected': 'https://devpost.com/software/protected/',
    'zeroresponders': 'https://devpost.com/software/zeroresponders',
    'facade': 'https://www.youtube.com/watch?v=YABhQ6WrWmk',
    'droplet': 'https://youtu.be/bDuVqdedkZA'
};

// Get the current path
const path = window.location.pathname.replace(/^\//, '').replace(/\.html$/, '');

// Check if we need to redirect
if (redirects[path]) {
    window.location.href = redirects[path];
} 