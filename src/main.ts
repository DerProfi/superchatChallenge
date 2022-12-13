import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from "pinia";

import '../src/styles/main.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
