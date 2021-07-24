import request from '@/utils/axios/request';

const Api = {
  login: '/login',
  logout: '/logout',
};

export function loginByPwd(params) {
  return request({
    url: Api.login,
    method: 'post',
    data: params,
  });
}
export function logout(params) {
  return request({
    url: Api.logout,
    method: 'get',
    data: params,
  });
}
