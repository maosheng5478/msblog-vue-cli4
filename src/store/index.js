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
      console.log('gettoken', state.user_token ? state.user_token : sessionStorage.getItem('token'));
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
    }
  }
});
