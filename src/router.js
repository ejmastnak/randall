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
  { path: '/', component: Home, meta: { title: "Home | Artisanal Restoration" } },
  { path: '/about', component: About, meta: { title: "About | Artisanal Restoration" } },
  { path: '/services', component: Services, meta: { title: "Services | Artisanal Restoration" } },
  { path: '/services/home-renovation', component: HomeRenovation, meta: { title: "Home Renovation | Artisanal Restoration" } },
  { path: '/portfolio', component: Portfolio, meta: { title: "Portfolio | Artisanal Restoration" } },
  { path: '/portfolio/flood-renovation', component: EvelynRenovation, meta: { title: "Flood Restoration | Artisanal Restoration" } },
  { path: '/contact', component: Contact, meta: { title: "Contact | Artisanal Restoration" } },
  { path: '/testimonials', component: Testimonials, meta: { title: "Testimonials | Artisanal Restoration" } },
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }  // always scroll to top
  },
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = 
    to.meta.title || "Artisanal Restoration";
  next();
});

export default router
