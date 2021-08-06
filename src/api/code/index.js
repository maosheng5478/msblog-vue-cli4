import request from '@/utils/axios/request';

const Api = {
  arithmetic: '/code/captcha/arithmetic',
  sms: '/code/sms'
};
export function getArithmetic() {
  return request({
    url: Api.arithmetic,
    method: 'get'
  });
};

export function sendSMS(phone) {
  return request({
    url: Api.sms,
    method: 'post',
    data: phone,
  });
}
