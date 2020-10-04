import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import FreePage from '@/views/FreePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/free',
    name: 'FreePage',
    component: FreePage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
