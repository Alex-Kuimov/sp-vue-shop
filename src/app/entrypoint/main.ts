import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router, setupRouterGuard } from '@/app/routes/';
import App from './App.vue';

import '@/app/styles/base.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

setupRouterGuard(router);
app.mount('#app')