import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Second from '../views/Second.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/second',
    name: 'Second',
    component: Second,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
