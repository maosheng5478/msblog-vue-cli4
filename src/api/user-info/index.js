import request from '@/utils/axios/request';

const Api = {
  menu: '/info/menu',
  role: '/info/role',
};

export function getMenu() {
  return request({
    url: Api.menu,
    method: 'post',
  });
}

export function getRole() {
  return request({
    url: Api.role,
    method: 'get',
  });
}
