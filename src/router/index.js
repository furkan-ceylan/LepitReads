import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Searchs from '../views/Searchs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Searchs',
    name: 'Searchs',
    component: Searchs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
