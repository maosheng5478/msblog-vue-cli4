import { elementComponents, elementPlugins } from './public/element-plus';
import Unicon from 'vue-unicons';
import { unicon } from './public/unicon';
import { customComp, svgIconComp } from './register';

// element plus config
const ElComponents = elementComponents;
const plugins = elementPlugins;
const myComponents = customComp;
Unicon.add(unicon);

export function registerGlobComp(app) {
  app.use(Unicon);
  // element plus component register
  ElComponents.forEach(component => {
    app.component(component.name, component);
  });
  // customized Components register
  myComponents.forEach(component => {
    app.component(component.name, component);
  });
  svgIconComp.forEach(svg => {
    app.component(svg.name, svg);
  });
  plugins.forEach(plugin => {
    app.use(plugin);
  });
}
