// eslint-disable-next-line import/no-extraneous-dependencies
import { createApp } from 'vue';
import router from './routes';

import App from './App.vue';

import './index.css';

// eslint-disable-next-line import/no-relative-packages
import './styles/main.css'; // 不要修改或删除

const app = createApp(App);
app.use(router);
app.mount('#app');
