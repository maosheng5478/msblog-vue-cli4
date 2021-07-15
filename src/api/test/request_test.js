import request from '@/utils/axios/request';

export function test () {
  return request({
    url: '/code/captcha/arithmtic',
    method: 'get'
  });
}
export function testErr () {
  return request({
    url: 'api/authentication',
    method: 'get'
  });
}
