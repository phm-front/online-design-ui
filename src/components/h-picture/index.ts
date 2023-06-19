import type { App } from 'vue';
import HPicture from './HPicture.vue';

HPicture.install = {
  install: (app: App) => {
    app.component(HPicture.name, HPicture);
  }
}

export default HPicture;
