import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Pages/Home/Home.vue'
import About from '@/Pages/About/About.vue'
import Services from '@/Pages/Services/Services.vue'
import HomeRenovation from '@/Pages/Services/HomeRenovation.vue'
import Portfolio from '@/Pages/Portfolio/Portfolio.vue'
import EvelynRenovation from '@/Pages/Portfolio/EvelynRenovation.vue'
import Testimonials from '@/Pages/Testimonials/Testimonials.vue'
import Contact from '@/Pages/Contact/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/services/home-renovation', component: HomeRenovation },
  { path: '/portfolio', component: Portfolio },
  { path: '/portfolio/flood-renovation', component: EvelynRenovation },
  { path: '/contact', component: Contact },
  { path: '/testimonials', component: Testimonials },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }  // always scroll to top
  },
  routes,
})

export default router
