
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
    component: () => import ('@/pages/Cart.vue'),
    beforeEnter: auhtGuardCart 
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
    component: () => import ('@/pages/Admin.vue'),
    beforeEnter: auhtGuardAdmin 
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//-----------------Защита роутов------------------------------------------------

function auhtGuardCart (to, from, next){// перед каждым роутом проверяем следующее
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
   if(isAdmin === false){  
    next('/login?message=login') // eсли  админ
   } else{
    next() // если админ- проходим на страницу
   }
}

function auhtGuardAdmin (to, from, next){// перед каждым роутом проверяем следующее
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"))
   if(isAdmin === false){  
    next('/login?message=loginAdmin') // eсли  админ
   } else{
    next() // если админ- проходим на страницу
   }
}

export default router
