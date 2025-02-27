import './assets/main.css'

import { createApp } from 'vue'
import App from './App-propsdemo.vue'
import FoodItem from './components/Propsdemo.vue'

const app=createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')