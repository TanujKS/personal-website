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
    path: '/droplet',
    redirect: 'https://youtu.be/bDuVqdedkZA',
  },
  {
    path: '/facade',
    redirect: 'https://youtu.be/YABhQ6WrWmk?si=5u-BQxc_OwY4VEdi',
  },
  {
    path: '/protected',
    redirect: 'https://devpost.com/software/protected/',
  },
  {
    path: '/writeright',
    redirect: 'https://devpost.com/software/writeright-pq8ihr',
  },
  {
    path: '/zeroresponders',
    redirect: 'https://devpost.com/software/zeroresponders',
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router
