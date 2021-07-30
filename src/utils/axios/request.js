import axios from 'axios';
import { ElMessage } from 'element-plus';
import store from '@/store';

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
        return reject(data.msg || 'error');
      } else {
        return resolve(data.data);
      }
    });
  }, error => {
    const response = error.response;
    if (response === null || response === '') {
      ElMessage({
        showClose: true,
        message: '服务器链接异常',
        type: 'error',
        duration: 2 * 1000,
      });
    } else {
      ElMessage({
        showClose: true,
        message: error.response.data.msg || 'server error',
        type: 'error',
        duration: 2 * 1000,
      });
    }
  }
);
export default service;
