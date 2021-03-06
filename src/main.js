import { createApp } from 'vue';
import App from './App.vue';
import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/packages/theme-chalk/src/base.scss';
import router from './router';
import store from './store';
import { registerGlobComp } from '@components';
import { setupI18n } from './locales';
import ElementLocale from 'element-plus/lib/locale';

(() => {
  const app = createApp(App);
  // Register global components
  registerGlobComp(app);
  // Multilingual configuration
  setupI18n(app, ElementLocale);
  app.use(store).use(router).mount('#app');
})();
