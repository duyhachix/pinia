import { createApp } from 'vue';
import App from './App.vue';

import { setupPinia } from './store/store';
const app = createApp(App);
app.use(setupPinia());
app.mount('#app');
