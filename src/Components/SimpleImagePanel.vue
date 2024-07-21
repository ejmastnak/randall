<script setup>
const props = defineProps({
  reverse: Boolean,
  imgSrc: String,
  imgAlt: String,
  imgCaption: String,
  imgClasses: {
    type: String,
    default: "",
  },
  captionClasses: {
    type: String,
    default: "",
  },
})
</script>
<template>
  <div
    class="md:flex md:gap-x-6"
    :class="reverse ? 'md:flex-row-reverse' : ''"
  >
    <div class="mb-4 md:mb-0 shrink-0">
      <img 
      :src="imgSrc"
      :alt="imgAlt"
      class="mx-auto my-auto object-cover rounded-md"
      :class="imgClasses"
    />
      <p v-if="imgCaption" :class="captionClasses" class="text-base text-gray-700 text-center mx-auto">{{imgCaption}}</p>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
