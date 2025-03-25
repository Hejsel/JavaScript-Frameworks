//import './assets/main.css'

import { createApp } from 'vue'
import App from './App-opgave6.vue'
import Input from './components/Opgave6Input.vue'
import Output from './components/Opgave6Output.vue'
const app=createApp(App)
app.component('Input', Input)
app.component('Output', Output)
app.mount('#app')