import request from '@/utils/axios/request';

const Api = {
  page: '/account/user/page',
  delete: '',
};

export function adminUserPage(params) {
  return request({
    url: Api.page,
    method: 'POST',
    data: params,
  });
};

export function deletedUser(params) {
  return request({
    url: Api.delete,
    method: 'POST',
    data: params,
  });
}
