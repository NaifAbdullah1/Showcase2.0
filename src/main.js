import { createApp } from 'vue'
import App from './App.vue'

import "./assets/styles.css"
//import VueSmoothScroll from 'vue3-smooth-scroll' // Smooth scrolling library that enables you to controll scrolling speed and duration. 


const app = createApp(App)
//app.use(VueSmoothScroll)
app.mount('#app')
