import './assets/css/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import i18n from './i18n';

const app = createApp(App);

app.use(router);
app.use(i18n);
app.config.globalProperties.$axios = axios;

app.mount('#app');