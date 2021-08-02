import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/client';
import { hasUser } from './user';
import { authentication } from '../api/login';
import { ElMessage } from 'element-plus';
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
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('../views/admin/dashboard'),
        meta: {
          requireAuth: true
        }
      },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const auth = to.meta.requireAuth;
  if (auth) {
    if (hasUser()) {
      authentication().then(() => {
        next();
      }).catch((err) => {
        console.log('autherr', err);
      });
    } else {
      ElMessage({
        showClose: true,
        message: 'You must login first',
        type: 'error',
        duration: 2 * 1000,
      });
      next({
        path: 'login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});
router.afterEach((to, from, next) => {
  document.querySelector('body').setAttribute('style', 'overflow: auto !important;');
  window.scrollTo(0, 0);
});

export default router;
