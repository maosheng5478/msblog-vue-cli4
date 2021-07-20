import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/client';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/client/home/Home'),
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/client/categories'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/layout/admin')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
