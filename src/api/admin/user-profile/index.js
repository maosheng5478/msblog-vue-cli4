import request from '@/utils/axios/request';

const Api = {
  page: '/account/user/page',
  delete: '/user/remove',
  deleteList: '/user/remove/list',
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
};

export function deleteList(idList) {
  return request({
    url: Api.deleteList,
    method: 'POST',
    data: idList,
  });
}
