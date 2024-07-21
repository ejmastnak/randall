<script setup>
const props = defineProps({
  route: String,
  disabled: Boolean,
})
</script>
<template>
  <li>
    <RouterLink :to="route" class="underline hover:text-blue-600 !text-xl" :class='{"text-gray-400": disabled, "hover:text-gray-400": disabled}'>
      <slot />
    </RouterLink>
  </li>
</template>
