//import './assets/main.css';

import { createApp } from 'vue';
import App from './App_opgave-1.vue';
import Komp1 from './components/opgave-1_Komp1.vue';
import Komp2 from './components/opgave-1_Komp2.vue';

const app = createApp(App);
app.component('komp1', Komp1);
app.component('komp2', Komp2);
app.mount('#app');
