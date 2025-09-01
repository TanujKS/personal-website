import { createRouter, createWebHistory } from 'vue-router'
import { handleDirectRouteRedirect } from '../utils/redirect.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home.vue')
  },
  // Redirect routes - these will be handled by the redirect system
  {
    path: '/contact-card',
    name: 'ContactCard',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('contact-card')
      next('/')
    }
  },
  {
    path: '/droplet',
    name: 'Droplet',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('droplet')
      next('/')
    }
  },
  {
    path: '/facade',
    name: 'Facade',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('facade')
      next('/')
    }
  },
  {
    path: '/protected',
    name: 'Protected',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('protected')
      next('/')
    }
  },
  {
    path: '/writeright',
    name: 'WriteRight',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('writeright')
      next('/')
    }
  },
  {
    path: '/zeroresponders',
    name: 'ZeroResponders',
    beforeEnter: (to, from, next) => {
      handleDirectRouteRedirect('zeroresponders')
      next('/')
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
