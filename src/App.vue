<script setup>
import Home from '@/Pages/Home/Home.vue'
import Header from '@/Shared/Header.vue';
import Footer from '@/Shared/Footer.vue';
</script>

<template>
  <main class="text-gray-900 max-w-7xl mx-auto">
    <Header />
    <RouterView />
    <Footer class="mt-12"/>
  </main>
</template>
