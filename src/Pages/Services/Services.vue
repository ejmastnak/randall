<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import ServiceListItem from './Partials/ServiceListItem.vue'
</script>
<template>

  <div class="max-w-5xl py-12">

    <h1 class="text-5xl font-['Latin_Modern_Roman']">Services</h1>

    <p class="mt-6 sm:mt-8 max-w-xl">
      <strong class="font-bold">Our specialty:</strong> Artisanal Restoration specializes in the renovation and restoration of historic homes, restoration of antique furniture, and in custom-built furniture and cabinetry.
      We serve the Central New Jersey and Eastern Pennsylvania area.
    </p>

    <div class="sm:flex mt-8 sm:mt-10 flex-row-reverse">

      <!-- Service image -->
      <div class="hidden sm:block w-72 md:w-96 shrink-0 grid place-items-start sm:ml-5">
        <img 
        src="/src/assets/img/handrail-profile.jpg"
        alt="Detail image of a custom profile carved into a staircase handrail"
        class="mx-auto object-cover rounded-md"
      />
      </div>

      <!-- List of services -->
      <div class="mt-4 text-lg lg:text-xl leading-relaxed sm:mr-auto">
        Additional services offered by Artisanal Restoration include:
        <ul class="list-disc ml-5 mt-2">
          <li>Bespoke home additions</li>
          <li>Custom trim and finish carpentry</li>
          <li>Construction and restoration of decks and porches</li>
          <li>Stair construction and restoration</li>
          <li>Service of windows and doors</li>
          <li>Interior and exterior rot restoration</li>
          <li>Regular service and maintenance of historic homes</li>
        </ul>

        <p class="mt-5">
          In any given job, we can combine and integrate all of these services into a cohesive whole matching your home and preferences.
        </p>

        <!-- Desktop contact button -->
        <RouterLink to="/contact" class="hidden md:block w-fit block mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
          Contact us with an inquiry
        </RouterLink>

      </div>

    </div>

    <!-- Mobile image -->
    <div class="sm:hidden mt-6">
      <img 
      src="/src/assets/img/handrail-profile.jpg"
      alt="Detail image of a custom profile carved into a staircase handrail"
      class="h-60 w-full mx-auto object-cover rounded-md"
    />
    </div>

    <!-- Mobile contact button -->
    <RouterLink to="/about" class="md:hidden w-fit block mt-6 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
      Send an inquiry
    </RouterLink>

    <div class="mt-6 md:mt-8 max-w-2xl">

      <Disclosure v-slot="{ open }">
        <DisclosureButton class="px-5 py-3 text-blue-900 bg-blue-50 hover:bg-blue-100 flex items-end w-full rounded-lg shadow-sm">
          <p>What does working with Artisanal Restoration look like in practice?</p>
          <ChevronDownIcon  class="ml-auto block w-6 h-6 text-gray-600 shrink-0"  :class="open && 'rotate-180 transform'" />
        </DisclosureButton>
        <DisclosurePanel class="mt-1 mx-2">
          <p class="mt-3">Working with Artisanal Restoration looks something like this:</p>
          <ul class="mt-5 ml-5 list-disc space-y-5">
            <li>
              You contact us by contact form, phone, or email from our
              <RouterLink to="/about" class="text-blue-500 hover:text-blue-600 hover:underline">
                Contact page.
              </RouterLink>
              Randall, the owner of Artisanal Restoration, will respond to discuss your project, answer questions, and schedule an on-site consultation at your home;
              you will then discuss a plan of work, project schedule, and budget.
            </li>
            <li>
              Randall performs the work himself at your home, bringing the necessary tools and materials with him in his pickup truck and packing up at the end of the day.
              He always comes with his trusty vacuum and cleans up throughout the work day—many clients report returning to such clean homes that they hardly believe they had construction work performed earlier that day.
            </li>
            <li>
              Randall will be communicative and accessible throughout the project, offering suggestions on design, how to do the work faithfully to the character and time period of your home, how to make repairs that will last permanently, and ways to simplify work and reduce costs without sacrificing quality; and he is always ready to explain both the functional and design reasons for any choice he makes.
            </li>
            <li>
              Clients consistenly praise Randall's attention to detail, quality of workmanship, and aversion to cutting corners, together with his excellent communication and readiness to explain every step of the design and work process along the way.
              We hope you will feel the same way!
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>

    <div class="mt-12 max-w-2xl">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Area served</h2>
      <p class="mt-4">We serve the Central New Jersey and Eastern Pennsylvania areas, focusing on homes in and around the following cities and townships:</p>
      <ul class="mt-5 ml-5 grid grid-cols-1 xxs:grid-cols-2 list-disc">
        <li>Annandale, NJ</li>
        <li>Bedminster, NJ</li>
        <li>Buckingham, PA</li>
        <li>Clinton, NJ</li>
        <li>Flemington, NJ</li>
        <li>Frenchtown, NJ</li>
        <li>Hopewell, NJ</li>
        <li>Lambertville, NJ</li>
        <li>Lawrence Township, NJ</li>
        <li>Lebanon, NJ</li>
        <li>New Hope, PA</li>
        <li>Pennington, NJ</li>
        <li>Pittstown, NJ</li>
        <li>Princeton, NJ</li>
        <li>Readington, NJ</li>
        <li>Ringoes, NJ</li>
        <li>Rocky Hill, NJ</li>
        <li>Solebury, PA</li>
        <li>Trenton, NJ</li>
        <li>Warren, NJ</li>
        <li>Whitehouse, NJ</li>
        <li>Whitehouse Station, NJ</li>
      </ul>
    </div>

    <div class="mt-12">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Services in detail</h2>

      <p class="mt-4 max-w-2xl text-gray-700">
        Click on an item in the list below for a detailed description of the service and to see representative projects of that type from Artisanal Restoration's portfolio.
      </p>

      <ul class="mt-5 space-y-3">
        <ServiceListItem route="/services/home-renovation">Restoration and renovation of historic homes</ServiceListItem>
        <ServiceListItem route="#">Restoration of antique furniture</ServiceListItem>
        <ServiceListItem route="#">Custom-built furniture and cabinetry</ServiceListItem>
        <ServiceListItem route="#">Bespoke home additions</ServiceListItem>
        <ServiceListItem route="#">Trim and finish carpentry</ServiceListItem>
        <ServiceListItem route="#">Decks and porches</ServiceListItem>
        <ServiceListItem route="#">Stairs</ServiceListItem>
        <ServiceListItem route="#">Windows and doors</ServiceListItem>
        <ServiceListItem route="#">Rot restoration</ServiceListItem>
        <ServiceListItem route="#">Service and maintenance of historic homes</ServiceListItem>
      </ul>

    </div>


  </div>

</template>
