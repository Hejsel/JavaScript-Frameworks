//import './assets/main.css'

import { createApp } from 'vue'
import App from './App-opgave4.vue'
import Refsdemo from './components/Opgave4Refs.vue'

const app=createApp(App)
app.component('refsdemo', Refsdemo)
app.mount('#app')