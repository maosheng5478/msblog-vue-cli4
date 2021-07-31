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
        path: '/tags',
        name: 'Tags',
        component: () => import('../views/client/tags'),
      },
      {
        path: '/links',
        name: 'Links',
        component: () => import('../views/client/links'),
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('../views/client/about'),
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/client/categories'),
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('../views/client/login'),
      },
      {
        path: 'userInfo',
        name: 'UserInfo',
        component: () => import('../views/client/use-info'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/layout/admin'),
    redirect: '/admin/dashboard',
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/dashboard')
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.afterEach((to, from, next) => {
  document.querySelector('body').setAttribute('style', 'overflow: auto !important;');
  window.scrollTo(0, 0);
});

export default router;
