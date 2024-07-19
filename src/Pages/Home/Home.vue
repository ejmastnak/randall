<script setup>
  import Header from '@/Shared/Header.vue';
  import Footer from '@/Shared/Footer.vue';
  import Hero from './Partials/Hero.vue';
  import About from './Partials/About.vue';
  import Services from './Partials/Services.vue';
</script>

<template>
  <div class="mx-auto">
    <Header />
    <Hero />

    <div class="mx-auto">
      <About class="-mt-2 sm:-mt-8" />
      <Services class="mt-12" />
    </div>

    <Footer class="mt-12"/>

  </div>
</template>
