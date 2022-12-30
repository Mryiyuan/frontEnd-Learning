import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Films from '@/views/Films.vue'
import Center from '@/views/Center.vue'
import Cinemas from '@/views/Cinemas.vue'

Vue.use(VueRouter)//注册路由插件

const routes = [
 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/films',
    name: 'film',
    component: Films
  }, 
  {
    path: '/center',
    name: 'center',
    component: Center
  }, 
  {
    path: '/cinemas',
    name: 'cinemas',
    component: Cinemas
  },
  {
    path:'/',
    redirect:'/films'
  },
  {
    path:'*',
    redirect:'/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
