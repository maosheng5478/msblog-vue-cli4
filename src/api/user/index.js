import request from '@/utils/axios/request';

const Api = {
  userInsert: '/user/add',
  userUpdata: '/user/update',
};

export function userInsert(params) {
  return request({
    url: Api.userInsert,
    method: 'post',
    data: params,
  });
}

export function userUpdata(params) {
  return request({
    url: Api.userUpdata,
    method: 'post',
    data: params,
  });
}
