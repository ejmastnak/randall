<script setup>
const props = defineProps({
  href: String,
})
</script>

<template>

  <router-link :to="href" class="block text-xl hover:underline hover:text-blue-600">
    <slot />
  </router-link>

</template>
