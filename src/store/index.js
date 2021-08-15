import { createStore } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { modules } from './modules';

export default createStore({
  state() {
    return {
      user_id: 0,
      username: '',
      code_key: '',
      user_token: '',
      user_phone: '',
      user_email: '',
      user_sex: -1,
      user_introduction: '',
      user_createTime: '',
      permission_menu: [],
    };
  },
  mutations,
  actions,
  modules,
  getters: {
    getUserId(state) {
      return state.user_id !== 0 ? state.user_id : sessionStorage.getItem('userId');
    },
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
      return state.user_sex !== -1 ? state.user_sex : sessionStorage.getItem('sex');
    },
    getUserCreateTime(state) {
      return state.user_createTime ? state.user_createTime : sessionStorage.getItem('createTime');
    },
    getUserIntroduction(state) {
      return state.user_introduction ? state.user_introduction : sessionStorage.getItem('introduction');
    },
    getPermissionMenu(state) {
      return state.permission_menu.length !== 0 ? state.permission_menu : [];
      // : sessionStorage.getItem('menu') === null ? [] : JSON.parse(sessionStorage.getItem('menu'));
    }
  }
});
