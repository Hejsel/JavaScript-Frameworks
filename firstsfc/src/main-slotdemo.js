import './assets/main.css'

import { createApp } from 'vue'
import App from './App-slotdemo.vue'
import Slotdemo from './components/Slotdemo.vue'

const app=createApp(App)
app.component('slotdemo', Slotdemo)
app.mount('#app')