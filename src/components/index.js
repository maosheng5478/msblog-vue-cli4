import { elementComponents, elementPlugins } from './public/element-plus';
import Unicon from 'vue-unicons';
import { unicon } from './public/unicon';
import { customComp } from './register';

// element plus config
const components = elementComponents;
const plugins = elementPlugins;
const myComponents = customComp;
Unicon.add(unicon);

export function registerGlobComp(app) {
  app.use(Unicon);
  // element plus component register
  components.forEach(component => {
    app.component(component.name, component);
  });
  // customized Components register
  myComponents.forEach(component => {
    app.component(component.name, component);
  });
  plugins.forEach(plugin => {
    app.use(plugin);
  });
  // const req = require.context('./icons', false, /\.svg$/);
  // const requireAll = requireContext => requireContext.keys().map(requireContext);
  // requireAll(req);
}
