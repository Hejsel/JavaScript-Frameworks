import './assets/main.css'

import { createApp } from 'vue'
import App from './App-refsdemo.vue'
import Refsdemo from './components/Refsdemo.vue'

const app=createApp(App)
app.component('refsdemo', Refsdemo)
app.mount('#app')