import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';
import { useage } from '../use';
import { useRouter } from 'vue-router';

const use = store;
const service = axios.create({
  baseURL: '/api',
  timeout: 5 * 1000,
});

service.interceptors.request.use(
  config => {
    // 获取后端传来的token
    const token = use.getters.getToken;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    config.data = JSON.stringify(config.data);
    config.headers['token'] = token;
    return config;
  },
  error => {
    console.error('request error', error);
    return Promise.reject(error);
  },
);
service.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
      const data = response.data;
      if (data.code !== 200) {
        ElMessage({
          showClose: true,
          message: data.msg || 'error',
          type: 'error',
          duration: 2 * 1000,
        });
        if (data.code === 401) {
          useage().clearLoginInfo();
          useage().router.replace('/login');
        }
        return reject(data.msg || 'error');
      } else {
        return resolve(data.data);
      }
    });
  }, error => {
    const response = error.response;
    console.log(response);
    if (response === undefined) {
      ElMessage({
        showClose: true,
        message: '服务器链接异常',
        type: 'error',
        duration: 2 * 1000,
      });
    } else {
      if (response.status === 401 || response.data.code === 401) {
        ElMessage({
          showClose: true,
          message: response.data.data,
          type: 'error',
          duration: 2 * 1000,
        });
        useRouter().replace('/login').then();
        // useage().router.replace('/login').then();
        useage().clearLoginInfo();
      } else {
        ElMessage({
          showClose: true,
          message: error.response.data.msg || 'server error',
          type: 'error',
          duration: 2 * 1000,
        });
      }
    }
  }
);
export default service;
