import Layout from '../../layout/admin';

export function formatRoutes(routers) {
  const fmtRoutes = [];
  routers.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children);
    }
    const fmtRoute = {
      path: route.path,
      component: route.component === 'layout' ? Layout : () => import('@/views/admin' + route.component),
      // resolve => {
      //   require(['@/views/admin' + route.component + 'index.vue'], resolve);
      // },
      name: route.name,
      nameZh: route.nameZh,
      icon: route.icon,
      children: route.children,
      meta: {
        requireAuth: true
      }
    };
    fmtRoutes.push(fmtRoute);
  });
  return fmtRoutes;
}
