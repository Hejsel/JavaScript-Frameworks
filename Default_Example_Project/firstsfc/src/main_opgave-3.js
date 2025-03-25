//import './assets/main.css';

import { createApp } from 'vue';
import App from './App_opgave-3.vue'; // ➤ Parrent Element
import Komp1 from './components/opgave-3_Komp1.vue'; // ➤ Children Element

const app = createApp(App);
app.component('komp1', Komp1);
app.mount('#app');
