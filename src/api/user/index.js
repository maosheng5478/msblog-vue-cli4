import request from '@/utils/axios/request';

const Api = {
  userInsert: '/user/add',
  userUpdate: '/user/update',
};

export function userInsert(params) {
  return request({
    url: Api.userInsert,
    method: 'post',
    data: params,
  });
}

export function userUpdate(params) {
  return request({
    url: Api.userUpdate,
    method: 'post',
    data: params,
  });
}
