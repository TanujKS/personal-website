import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue'),
  },
  {
    path: '/contact-card',
    name: 'Contact Card',
    component: () => import('../components/Contact.vue'),
  },
  {
    path: '/droplet',
    redirect: '/external-redirect?url=https://youtu.be/bDuVqdedkZA',
  },
  {
    path: '/facade',
    redirect: '/external-redirect?url=https://youtu.be/YABhQ6WrWmk?si=5u-BQxc_OwY4VEdi',
  },
  {
    path: '/protected',
    redirect: '/external-redirect?url=https://devpost.com/software/protected/',
  },
  {
    path: '/writeright',
    redirect: '/external-redirect?url=https://devpost.com/software/writeright-pq8ihr',
  },
  {
    path: '/clearance',
    redirect: '/external-redirect?url=https://devpost.com/software/clearance',
  },
  {
    path: '/zeroresponders',
    redirect: '/external-redirect?url=https://devpost.com/software/zeroresponders',
  },
  {
    path: '/external-redirect',
    name: 'ExternalRedirect',
    component: {
      template: '<div>Redirecting...</div>',
      mounted() {
        const url = this.$route.query.url
        if (url) {
          window.location.href = url
        }
      },
    },
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
