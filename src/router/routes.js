import Layout from '@/layout/client';
export const routerList = [
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
