import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Numbers from '../views/Numbers.vue'


const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/numbers', name: 'Numbers', component: Numbers, }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;