import { createRouter, createWebHistory } from 'vue-router'

import Home  from '@/pages/Home'
import Catalog from '@/pages/Catalog'
import Cart from '@/pages/Cart'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/catalog',
   component: Catalog
   
  },
  {
    path: '/cart',
   component: Cart
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
