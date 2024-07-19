<script setup>
import HeaderLink from './Partials/HeaderLink.vue'
import { XMarkIcon, Bars3Icon  } from '@heroicons/vue/24/outline'

import { ref } from 'vue'

const mobileMenuShowing = ref(false)

</script>

<template>
  <div class="sticky top-0 bg-white border-b z-10">
    <div class="max-w-5xl mx-auto">

      <!-- Desktop -->
      <div class="hidden md:flex justify-between items-center pt-3 pb-5 px-4">
        <HeaderLink href="#">Home</HeaderLink>
        <HeaderLink href="#">About</HeaderLink>
        <HeaderLink href="#">Services</HeaderLink>
        <a href="#" class="font-['Latin_Modern_Roman'] text-3xl tracking-wide hover:text-blue-800">
          <div class="text-center tracking-wider">
            <p>Artisanal</p>
            <p class="-mt-1.5">Restoration</p>
          </div>
        </a>
        <HeaderLink href="#">Portfolio</HeaderLink>
        <HeaderLink href="#">Testimonials</HeaderLink>
        <HeaderLink href="#">Contact</HeaderLink>
      </div>

      <!-- Mobile -->
      <div class="relative flex md:hidden justify-between pt-3 pb-5 px-4">
        <a href="#" class="ml-1 xs:ml-2 font-['Latin_Modern_Roman'] text-3xl xs:text-4xl xs:tracking-wide hover:text-blue-800">
          Artisanal Restoration
        </a>
        <button type="button" class="ml-2" >
          <Bars3Icon v-show="!mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
          <XMarkIcon v-show="mobileMenuShowing" class="text-gray-600 h-[1.75rem] w-[1.75rem] xs:h-[2rem] xs:w-[2rem]" @click="mobileMenuShowing = !mobileMenuShowing" />
        </button> 
      </div>

    </div>

    <div v-show="mobileMenuShowing" class="absolute right-0 w-fit bg-white border-x border-b border-gray-300">
      <div class="relative px-8 pt-6 pb-8 text-left w-fit mx-auto space-y-4">
        <HeaderLink class="border-b" href="#">Home</HeaderLink>
        <HeaderLink class="border-b" href="#">About</HeaderLink>
        <HeaderLink class="border-b" href="#">Services</HeaderLink>
        <HeaderLink class="border-b" href="#">Portfolio</HeaderLink>
        <HeaderLink class="border-b" href="#">Testimonials</HeaderLink>
        <HeaderLink class="border-b" href="#">Contact</HeaderLink>
      </div>
    </div>


  </div>
</template>
