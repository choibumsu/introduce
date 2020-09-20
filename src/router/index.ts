import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'

const routerHistory = createWebHistory()

export default createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: MainPage,
    },
  ],
})
