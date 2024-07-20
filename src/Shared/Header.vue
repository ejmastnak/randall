<script setup>
import HeaderLink from './Partials/HeaderLink.vue'
import { XMarkIcon, Bars3Icon  } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const mobileMenuShowing = ref(false)

</script>

<template>
  <div class="sticky top-0 bg-white border-b z-20">
    <div class="max-w-5xl mx-auto">

      <!-- Desktop -->
      <div class="hidden md:flex justify-between items-center pt-3 pb-5 px-4">
        <HeaderLink route="/">Home</HeaderLink>
        <HeaderLink route="/about">About</HeaderLink>
        <HeaderLink route="/services">Services</HeaderLink>
        <HeaderLink route="/" class="font-['Latin_Modern_Roman'] !text-3xl tracking-wide hover:text-blue-800">
          <div class="text-center tracking-wider">
            <p>Artisanal</p>
            <p class="-mt-1.5">Restoration</p>
          </div>
        </HeaderLink>
        <HeaderLink route="/portfolio">Portfolio</HeaderLink>
        <HeaderLink route="/testimonials">Testimonials</HeaderLink>
        <HeaderLink route="/contact">Contact</HeaderLink>
      </div>

      <!-- Mobile -->
      <div class="relative flex md:hidden justify-between pt-3 pb-5 px-4">
        <HeaderLink route="/" class="ml-1 xs:ml-2 font-['Latin_Modern_Roman'] text-3xl xs:text-4xl xs:tracking-wide hover:text-blue-800">
          Artisanal Restoration
        </HeaderLink>
        <button type="button" class="ml-2" >
          <Bars3Icon v-show="!mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
          <XMarkIcon v-show="mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
        </button> 
      </div>

    </div>

    <Transition>
      <div v-show="mobileMenuShowing" class="absolute right-0 w-fit bg-white border-x border-b border-gray-300">
          <div class="relative px-8 pt-6 pb-8 text-left w-fit mx-auto space-y-4">
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/">Home</HeaderLink>
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/about">About</HeaderLink>
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/services">Services</HeaderLink>
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/portfolio">Portfolio</HeaderLink>
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/testimonials">Testimonials</HeaderLink>
            <HeaderLink @click="mobileMenuShowing = false" class="border-b" route="/contact">Contact</HeaderLink>
          </div>
        </div>
    </Transition>

  </div>
</template>

<style>
  .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
