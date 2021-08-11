import { createRouter, createWebHistory } from 'vue-router';
import { routerList } from './routes';
import { hasUser } from './user';
import { authentication } from '../api/login';
import { ElMessage } from 'element-plus';

const routes = routerList;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (hasUser()) {
      authentication().then(() => {
        next();
      }).catch((err) => {
        console.log('autherr', err);
        next({
          path: 'login',
          query: { redirect: to.fullPath }
        });
      });
    } else {
      ElMessage({
        showClose: true,
        message: 'Please login first',
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

console.log(router);
