import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/new',
      name: 'new-cafe',
      component: () => import('@/views/NewCafePage.vue'),
    },
    {
      path: '/cafe/:id',
      name: 'edit-cafe',
      component: () => import('@/views/EditCafePage.vue'),
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/views/SignInPage.vue'),
    },
  ],
})

export default router
