import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/movieList',
    name: 'movieList',
    component: () => import('../pages/moviesList.vue')
  },
  {
    path: '/movieDetail',
    name: 'movieDetail',
    component: () => import('../pages/movieDetail.vue')
  },
  {
    path: '/newDetail',
    name: 'newDetail',
    component: () => import('../pages/newDetail.vue')
  },
  {
    path: '/loginPage',
    name: 'loginPage',
    component: () => import('../pages/loginPage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/registerPage.vue')
  },
  {
    path: '/findPW',
    name: 'findPassword',
    component: () => import('../pages/findPassword.vue')
  },                 
  {
    path: '/userInfo',
    name: 'userInfo',
    component: () => import('../pages/userInfo.vue')
  },
  {
    path: '/sendEmail',
    name: 'sendEmail',
    component: () => import('../pages/sendEmail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
