<script setup>
  import Hero from './Partials/Hero.vue';
  import About from './Partials/About.vue';
  import Services from './Partials/Services.vue';
  import Testimonials from './Partials/Testimonials.vue'
</script>

<template>
  <div>
    <!-- Negative Hero margin undoes parent container padding -->
    <Hero class="-mx-4 md:-mx-6" />
    <About class="-mt-2 sm:-mt-8" />
    <Services class="mt-12" />
    <Testimonials class="mt-12" />
  </div>
</template>
