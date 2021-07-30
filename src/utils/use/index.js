import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { getCurrentInstance } from 'vue';

export function logItem() {
  console.log(commonUse().store);
}
export const useage = () => {
  const router = useRouter();
  const store = useStore();
  return {
    router,
    store,
  };
};
export function commonUse() {
  const i18n = useI18n();
  const { proxy } = getCurrentInstance;
  const router = useRouter();
  const store = useStore();
  const clearLoginInfo = function() {
    sessionStorage.clear();
    store.commit('setUserPhone', '');
    store.commit('setUsername', '');
    store.commit('setUserEmail', '');
    store.commit('setUserToken', '');
  };
  function getI18nItemByProxy(param) {
    const itemString = 'message.' + param;
    return proxy.$t(itemString);
  };
  function getI18nItem(param) {
    const itemString = 'message.' + param;
    return i18n.t(itemString);
  }
  function routerGo(path) {
    router.push(path).then(() => {});
  }
  return {
    i18n,
    router,
    store,
    getI18nItem,
    clearLoginInfo,
    getI18nItemByProxy,
    routerGo,
  };
};
