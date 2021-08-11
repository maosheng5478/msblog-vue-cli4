import store from '@/store';

export function hasUser() {
  const token = store.getters.getToken;
  if (!token) {
    return false;
  }
  return true;
};

export function formatRoutes(routers) {
  const fmtRoutes = [];
  routers.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children);
    }
    const fmtRoute = {
      path: route.path,
      component: resolve => {
        require(['../views/admin/' + route.component], resolve);
      },
      name: route.name,
      nameZh: route.nameZh,
      icon: route.iconCls,
      children: route.children
    };
    fmtRoutes.push(fmtRoute);
  });
  return fmtRoutes;
}
