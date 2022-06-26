import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import exp from '../views/exp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exp',
    component: exp

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
