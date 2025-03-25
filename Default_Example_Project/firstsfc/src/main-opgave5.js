//import './assets/main.css'

import { createApp } from 'vue'
import App from './App-opgave5.vue'
import Emitter from './components/Opgave5Emitter.vue'

const app=createApp(App)
app.component('emitter', Emitter)
app.mount('#app')