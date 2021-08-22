import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

import firebase from 'firebase';
import './firebase/init';

createApp(App)
  .use(store)
  .use(router)
  .use(firebase)
  .mount('#app');
