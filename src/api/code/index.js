import request from '@/utils/axios/request';

const Api = {
  arithmetic: '/code/captcha/arithmetic',
};
export function getArithmetic() {
  return request({
    url: Api.arithmetic,
    method: 'get'
  });
}
