import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { createPinia } from 'pinia';
import router from './router';

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.use(vuetify);
app.use(router);

app.mount('#app');
import('./assets/js/effects/demo3.js').then((module) => {
  console.log(':: Effects ok ::');
});
