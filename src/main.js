import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import store from './store'

AOS.init()

createApp(App).use(store).use(router).mount('#app')
