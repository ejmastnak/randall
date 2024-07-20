<script setup>
const props = defineProps({
  route: String,
})
</script>
<template>
  <li class="underline !text-xl">
    <RouterLink :to="route" class="hover:text-blue-600">
      <slot />
    </RouterLink>
  </li>
</template>
