import { createRouter, createWebHistory } from 'vue-router';
import { routerList } from './routes';
import { authentication } from '@/api/login';
import { ElMessage } from 'element-plus';
import { handleMenu } from '@/router/permission';
import store from '../store';

const routes = routerList;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.getters.getToken) {
      await authentication().then(async () => {
        if (store.state.permission_menu.length === 0) {
          await handleMenu(router);
          next({ ...to, replace: true });
        } else {
          next();
        }
      }).catch((err) => {
        console.log('auth err', err);
        next({ path: 'login', query: { redirect: to.fullPath } });
      });
    } else {
      ElMessage({
        showClose: true,
        message: 'Please login first',
        type: 'error',
        duration: 2 * 1000,
      });
      next({ path: 'login', query: { redirect: to.fullPath } });
    }
  } else {
    // 解决刷新空白，跳转admin主页
    if (to.path.includes('/admin/')) {
      await handleMenu(router);
      next({ path: 'admin' });
      return;
    }
    next();
  }
});

router.afterEach((to, from, next) => {
  document.querySelector('body').setAttribute('style', 'overflow: auto !important;');
  window.scrollTo(0, 0);
});

router.onError((handler) => {
  console.log('router-error:', handler);
});

export default router;
