<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import ServiceListItem from './Partials/ServiceListItem.vue'
</script>
<template>

  <div class="max-w-5xl py-12">

    <h1 class="text-5xl font-['Latin_Modern_Roman']">Renovation and restoration of historic homes</h1>

    

    <div class="sm:flex mt-8 sm:mt-10 flex-row-reverse">

      <!-- Service image -->
      <div class="hidden sm:block w-72 md:w-96 shrink-0 grid place-items-start sm:ml-5">
        <img 
        src="/src/assets/img/evelyn-front.jpg"
        alt="Detail image of a custom profile carved into a staircase handrail"
        class="mx-auto object-cover rounded-md"
      />
      </div>

      <!-- List of services -->
      <div class="mt-4 text-lg lg:text-xl leading-relaxed sm:mr-auto">
        <p class="mt-6 sm:mt-8 max-w-xl">
          We specialize in the service of historic homes, handling everything from routine maintenance to full-scale renovations.

          We adapt to each home on a case by case basis.

          Specialize in making sense of many layers of work and repairs performed on the house over the decades.

          Period-appropriate design, trim, and finish carpentry.

          Our work will always be faithful to the time period and unique character of your home. 
        </p>
      </div>

    </div>

    <!-- Mobile image -->
    <div class="sm:hidden mt-6">
      <img 
      src="/src/assets/img/evelyn-front.jpg"
      alt="Detail image of a custom profile carved into a staircase handrail"
      class="h-60 w-full mx-auto object-cover rounded-md"
    />
    </div>

    <div class="">
      Projects: Evelyn renovation. Anderson restoration. Evelyn weave.
    </div>


  </div>

</template>
