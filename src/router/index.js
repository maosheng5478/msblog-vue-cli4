import { createRouter, createWebHistory } from 'vue-router';
import { routerList } from './routes';
import { authentication } from '../api/login';
import { ElMessage } from 'element-plus';
import { getMenu } from '../api/menu';
import { formatRoutes } from '../utils/asyncRouters';
import store from '../store';

const routes = routerList;

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  // if (to.matched.length === 0){ router.push(to.path).then(() => {
  //   getMenu().then(res => {
  //     const fmtRoutes = formatRoutes(res);
  //     fmtRoutes.forEach(item => {
  //       router.addRoute(item);
  //     });
  //     console.log('setPermissionMenu', router.getRoutes());
  //     store.commit('setPermissionMenu', fmtRoutes);
  //     console.log('router', store.getters.getPermissionMenu);
  //   }).catch();
  // }); }
  if (to.meta.requireAuth) {
    if (store.getters.getToken) {
      authentication().then(() => {
        if (store.state.permission_menu.length === 0) {
          next({ ...to, replace: true });
        } else {
          next();
        }
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
router.onError((handler) => {
  console.log('error:', handler);
});
export default router;
