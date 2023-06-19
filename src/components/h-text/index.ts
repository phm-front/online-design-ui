import type { App } from 'vue';
import HText from './HText.vue';

HText.install = {
  install: (app: App) => {
    app.component(HText.name, HText);
  }
}

export default HText;
