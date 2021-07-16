import { elementComponents, elementPlugins } from './public/element-plus';
import Unicon from 'vue-unicons';
import { unicon } from './public/unicon';

// element plus config
const components = elementComponents;
const plugins = elementPlugins;
Unicon.add(unicon);

export function registerGlobComp(app) {
  app.use(Unicon);
  components.forEach(component => {
    app.component(component.name, component);
  });
  plugins.forEach(plugin => {
    app.use(plugin);
  });
}
