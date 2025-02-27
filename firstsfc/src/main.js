//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Komp1 from './components/Komponent1.vue'
import Komp2 from './components/Komponent2.vue'

const app=createApp(App)
app.component('kompa', Komp1)
app.component('kompb', Komp2)
app.mount('#app')