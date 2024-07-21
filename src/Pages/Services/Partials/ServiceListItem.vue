<script setup>
const props = defineProps({
  route: String,
})
</script>
<template>
  <li>
    <RouterLink :to="route" class="underline hover:text-blue-600 !text-xl">
      <slot />
    </RouterLink>
  </li>
</template>
