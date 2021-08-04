import { createStore } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { modules } from './modules';

export default createStore({
  state() {
    return {
      username: '',
      code_key: '',
      user_token: '',
      user_phone: '',
      user_email: '',
      user_sex: '',
      user_introduction: '',
      user_createTime: '',
    };
  },
  mutations,
  actions,
  modules,
  getters: {
    getCodeKey(state) {
      return state.code_key;
    },
    getToken(state) {
      return state.user_token ? state.user_token : sessionStorage.getItem('token');
    },
    getPhone(state) {
      return state.user_phone ? state.user_phone : sessionStorage.getItem('phone');
    },
    getEmail(state) {
      return state.user_email ? state.user_email : sessionStorage.getItem('email');
    },
    getUsername(state) {
      return state.username ? state.username : sessionStorage.getItem('username');
    },
    getUserSex(state) {
      return state.user_sex ? state.user_sex : sessionStorage.getItem('sex');
    },
    getUserCreateTime(state) {
      return state.user_createTime ? state.user_createTime : sessionStorage.getItem('createTime');
    },
    getUserIntroduction(state) {
      return state.user_introduction ? state.user_introduction : sessionStorage.getItem('introduction');
    },
  }
});
