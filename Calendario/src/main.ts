// main.ts

import { createApp } from 'vue';
import App from './App.vue';
import { registerPlugins } from '@/plugins';
import vuetify from '@/plugins/vuetify';
import i18n from './i18n'; // Importa la configuración de vue-i18n desde i18n.ts

const app = createApp(App);

registerPlugins(app);

app.use(vuetify);
app.use(i18n); // Usa vue-i18n en tu aplicación

app.mount('#app');
