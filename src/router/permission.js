import { getMenu } from '@/api/menu';
import { formatRoutes } from '@/utils/asyncRouters';
import store from '@store';

export const handleMenu = async function(router) {
  await getMenu().then(res => {
    const fmtRoutes = formatRoutes(res);
    fmtRoutes.forEach(item => {
      router.addRoute(item);
    });
    store.commit('setPermissionMenu', fmtRoutes);
  }).catch(e => {
    console.error('handle menu:', e);
  });
};
