import AdminLayout from '../../layout/admin';

export function formatRoutes(routers) {
  const fmtRoutes = [];
  routers.forEach(route => {
    if (route.children) {
      route.children = formatRoutes(route.children);
    }
    const fmtRoute = {
      path: route.path,
      component: route.component === 'layout' ? AdminLayout // : () => import('@/views/admin' + route.component),
        : resolve => require('@/views/admin' + route.component + '/index.vue'),
      nameZh: route.nameZh,
      icon: route.icon,
      children: route.children,
      meta: {
        requireAuth: true,
        title: route.nameZh,
      }
    };
    fmtRoutes.push(fmtRoute);
  });
  return fmtRoutes;
}
