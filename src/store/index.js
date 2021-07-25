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
      return state.user_token;
    },
    getPhone(state) {
      return state.user_phone;
    },
    getEmail(state) {
      return state.user_email;
    },
    getUsername(state) {
      return state.username;
    }
  }
});
