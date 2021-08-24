import language from './language';
import userEditForm from './userEditForm';
import svgIcon from './public/svgIcon';
import { svgIconVue } from './svg';
import charts from './vue-echarts/index.vue';

export const customComp = [
  language,
  userEditForm,
  svgIcon,
  charts,
];
export const svgIconComp = svgIconVue;
