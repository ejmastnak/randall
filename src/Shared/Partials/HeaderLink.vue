<script setup>
const props = defineProps({
  route: String,
})
</script>

<template>

  <RouterLink :to="route" class="block text-xl hover:underline hover:text-blue-600">
    <slot />
  </RouterLink>

</template>
