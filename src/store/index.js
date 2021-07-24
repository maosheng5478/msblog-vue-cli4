import { createStore } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { modules } from './modules';

export default createStore({
  state: {},
  mutations,
  actions,
  modules,
});
