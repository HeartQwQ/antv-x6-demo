import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../view/home/index.vue')
        },
        {
          path: 'index/:id',
          name: 'index',
          component: () => import('../view/index.vue')
        },
      ]
    },
  ]
})


export default router
