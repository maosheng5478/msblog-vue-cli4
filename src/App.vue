<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>
<script >
import { defineComponent, ref, getCurrentInstance, watch, reactive } from 'vue';
import zhLocale from 'element-plus/lib/locale/lang/zh-cn';
import enLocale from 'element-plus/lib/locale/lang/en'; // 英文

export default defineComponent({
  components: {
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const p = reactive(proxy.$i18n.locale);
    let locale = ref(zhLocale);
    watch(p, (newVal, oldVal) => {
      // console.log('打印变化前后的值', { oldVal, newVal });
      change();
    });
    function change () {
      switch (proxy.$i18n.locale) {
        case 'zh':
          locale = ref(zhLocale);
          return zhLocale;
        case 'en':
          locale = ref(enLocale);
          return enLocale;
      }
      console.log(locale);
    }
    change();
    return {
      locale,
      proxy,
    };
  },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 0px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
