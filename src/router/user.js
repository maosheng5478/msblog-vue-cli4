import store from '@/store';

export function hasUser() {
  const token = store.getters.getToken;
  if (!token) {
    return false;
  }
  return true;
};
