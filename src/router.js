import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
