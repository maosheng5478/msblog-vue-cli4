import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

export function logItem() {
  console.log(commonUse().store);
}
export const useage = () => {
  const router = useRouter();
  const store = useStore();
  const clearLoginInfo = function() {
    sessionStorage.clear();
    store.commit('setUserPhone', '');
    store.commit('setUsername', '');
    store.commit('setUserEmail', '');
    store.commit('setUserToken', '');
  };
  return {
    router,
    clearLoginInfo,
    store,
  };
};
export function commonUse() {
  const { t } = useI18n();
  const router = useRouter();
  const store = useStore();
  const clearLoginInfo = function() {
    sessionStorage.clear();
    store.commit('setUserPhone', '');
    store.commit('setUsername', '');
    store.commit('setUserEmail', '');
    store.commit('setUserToken', '');
  };
  function getI18nItem(param) {
    const itemString = 'message.' + param;
    return t(itemString);
  }
  function routerGo(path) {
    router.push(path).then(() => {});
  }
  return {
    t,
    router,
    store,
    getI18nItem,
    clearLoginInfo,
    routerGo,
  };
};
