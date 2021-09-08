import request from '@/utils/axios/request';

const Api = {
  page: '/account/user/page',
};

export function adminUserPage(params) {
  return request({
    url: Api.page,
    method: 'POST',
    data: params,
  });
}
