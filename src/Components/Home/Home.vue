<script setup>
  import Header from '@/Components/Header.vue';
  import Footer from '@/Components/Footer.vue';
  import Hero from './Partials/Hero.vue';
  import About from './Partials/About.vue';
  import Products from './Partials/Products.vue';
</script>

<template>
  <div class="mx-auto">
    <Header />
    <Hero />

    <div class="mx-auto">
      <About class="-mt-2 sm:-mt-8" />
      <Products class="mt-12" />
    </div>

    <Footer class="mt-12"/>

  </div>
</template>
