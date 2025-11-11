import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from '@/app/routes/';
import App from './App.vue';

import '@/app/styles/base.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app')