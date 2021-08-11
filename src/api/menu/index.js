import request from '@/utils/axios/request';

const Api = {
  menu: '/info/menu',
};

export function getMenu() {
  return request({
    url: Api.menu,
    method: 'post',
  });
}
