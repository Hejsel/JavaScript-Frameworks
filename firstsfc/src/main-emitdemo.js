import './assets/main.css'

import { createApp } from 'vue'
import App from './App-emitdemo.vue'
import Emitter from './components/Emitter.vue'

const app=createApp(App)
app.component('emitter', Emitter)
app.mount('#app')