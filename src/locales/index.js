import { createI18n } from 'vue-i18n'; // 引入vue-i18n组件
import lang from './lang/index';
import ZhLocale from 'element-plus/lib/locale/lang/zh-cn'; // 中文
import EhLocale from 'element-plus/lib/locale/lang/en'; // 英文
import ElementPlus from 'element-plus';
const language = (
  (navigator.language ? navigator.language : navigator.userLanguage) || 'zh'
).toLowerCase();
const messages = {
  zh: {
    ...lang.zh,
    ...ZhLocale
  },
  en: {
    ...lang.en,
    ...EhLocale,
  }
};
const i18n = createI18n({
  fallbackLocale: 'ch',
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  locale: language.split('-')[0] || 'zh',
  messages,
});
export function setupI18n(app, ElementLocale) {
  ElementLocale.i18n((key, value) => i18n.global.t(key, value));
  app.use(i18n);
  const cur = app.__VUE_I18N__.global.locale.value;
  if (cur === 'zh') {
    app.use(ElementPlus, {
      locale: ZhLocale,
    });
  } else {
    app.use(ElementPlus, {
      locale: EhLocale,
    });
  }
}
