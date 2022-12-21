import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout:'main-layout'},// обязательно добавляем -layout!!!
    component: () => import ('@/pages/Home.vue')// lazy load
  },
  
  {
    path: '/catalog',
    name: 'catalog',
    meta: {layout:'main-layout'},// which layout we use
    component: () => import ('@/pages/Catalog.vue')// lazy load
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {layout:'cart-layout'},
    component: () => import ('@/pages/Cart.vue')
  },
  {
    path: '/product',
    name: 'product',
    meta: {layout:'cart-layout'},
    component: () => import ('@/pages/Product.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout:'empty-layout'},
    component: () => import ('@/pages/Login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {layout:'empty-layout'},
    component: () => import ('@/pages/Registration.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {layout:'empty-layout'},
    component: () => import ('@/pages/Admin.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
