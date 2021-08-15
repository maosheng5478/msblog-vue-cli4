import store from '@/store';

export function hasUser() {
  return store.getters.getToken;
};
