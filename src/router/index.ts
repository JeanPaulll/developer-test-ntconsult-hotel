import { createRouter, createWebHistory } from 'vue-router'
import HomeViewComponent from '@/views/HomeViewComponent.vue'
import CompareHotelsViewComponent from '@/views/CompareHotelsViewComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewComponent
    },
    {
      path: '/compare-hotels',
      name: 'compare',
      component: CompareHotelsViewComponent
    }
  ]
})

export default router
