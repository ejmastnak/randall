import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About/About.vue'
import Contact from '@/Pages/Contact/Contact.vue'
import Testimonials from '@/Pages/Testimonials/Testimonials.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/testimonials', component: Testimonials },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
