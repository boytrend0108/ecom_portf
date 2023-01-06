
import { getAuth } from 'firebase/auth'
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
    path: '/product/:id',
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
   if(!getAuth().currentUser){  
    next('/login?message=getlogin') // if not register
   } else{
    next() // if ok
   }
}

function auhtGuardAdmin(to, from, next) {// перед каждым роутом проверяем следующее
  if (getAuth().currentUser === null || getAuth().currentUser.uid !== "NkZarklbJnPi7952bNfGaDusc6S2") {
    next('/login?message=loginAdmin') // eсли нет
  } else {
    next() // если админ- проходим на страницу
  }
}
//------------------------------------------------------------------------------
export default router
