import request from '@/utils/axios/request';

const Api = {
  login: '/login',
  logout: '/logout',
  authentication: 'api/authentication',
};

export function loginByPwd(params) {
  return request({
    url: Api.login,
    method: 'post',
    data: params,
  });
};
export function logout() {
  return request({
    url: Api.logout,
    method: 'get',
  });
};
export function authentication() {
  return request({
    url: Api.authentication,
    method: 'post'
  });
}
