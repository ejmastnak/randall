<script setup>
import Home from '@/Pages/Home/Home.vue'
import Header from '@/Shared/Header.vue';
import Footer from '@/Shared/Footer.vue';
</script>

<template>
  <main class="text-gray-900 max-w-7xl mx-auto">
    <Header class="mx-auto" />
    <RouterView class="mx-auto text-lg lg:text-xl px-4 md:px-6" />
    <Footer class="mt-12 mx-auto"/>
  </main>
</template>
