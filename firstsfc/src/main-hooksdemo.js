import './assets/main.css'

import { createApp } from 'vue'
import App from './App-hooksdemo.vue'
import Sekunder from './components/Hooksdemo.vue'

const app=createApp(App)
app.component('sekunder', Sekunder)
app.mount('#app')