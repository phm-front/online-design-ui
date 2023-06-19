import { App } from 'vue';
import HPicture from './components/h-picture';
import HText from './components/h-text';

export * from './components/h-picture/hPicture';
export * from './components/h-text/hText';

export * from './components/utils/defaultProps';
export * from './components/utils/commonTypes';
export * from './hooks/useComponentCommon';
export * from './utils/commonFun';

const components = [HPicture, HText];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default install;
export {
  HPicture,
  HText
}
