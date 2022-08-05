import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import LandingPageView from '../views/LandingPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home',
    component: LandingPageView
  },
  {                                                                                         
    path: '/home',
    name: 'LandingPageView',
    component: LandingPageView
  },
  {                                                                                         
    path: '/users',
    name: 'UserView',
    component: UserView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
