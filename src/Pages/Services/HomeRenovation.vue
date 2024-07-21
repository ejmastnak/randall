<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { Disclosure, DisclosureButton, DisclosurePanel, } from '@headlessui/vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'
</script>
<template>

  <div class="max-w-5xl py-12">

    <h1 class="text-5xl font-['Latin_Modern_Roman']">Restoration and renovation of historic homes</h1>

    <p class="mt-8 max-w-2xl">
      We specialize in the restoration, renovation, and remodeling of historic homes, handling everything from routine maintenance to full-scale remodels.
    </p>

    <SimpleImagePanel
      class="mt-10"
      :reverse="true"
      imgFile="evelyn-front.jpg"
      imgAlt="A 1910 home in Princeton, NJ served by Artisanal Restoration"
      imgClasses="h-60 w-full max-w-sm mx-auto md:h-80 md:max-w-md"
    >
      <p>
        <span class="font-bold">We welcome quirks and irregularities:</span> Thanks to decades' of experience working on houses from the 18th century onwards, we intuitively recognize and adapt to all the quirks of historic homes:
        walls that are neither square nor level nor plumb; corroding hardware; old joinery; non-standard structural dimensions; and layers of previous repairs accumulated over the decades that most carpenters and construction companies would balk at.
      </p>

      <p class="mt-2">
        We adapt to each home on a case-by-case basis, and can accomodate our design, construction, and finish carpentry to exactly match the style and time period of your home.
      </p>

      <p class="mt-5">
        <span class="font-bold">Our promise:</span> We treat your home like it is our own, and genuinely care about leaving it better than we found it.
        From the smallest repairs to full-scale renovations, our work will always remain faithful to the unique character of your home. 
      </p>
    </SimpleImagePanel>

    <div class="mt-10 max-w-4xl">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Services offered</h2>
      <p class="mt-4">Concrete services we offer related to home restoration and renovation include:</p>
      <ul class="mt-4 ml-5 grid grid-cols-1 gap-x-5 lg:grid-cols-2 list-disc">
        <li>Kitchen remodels</li>
        <li>Bathroom remodels</li>
        <li>Custom home additions</li>
        <li>Fixing squeaky floors</li>
        <li>Interior and exterior rot repair</li>
        <li>Restoring antique furniture</li>
        <li>Porches and decks: repair and new construction</li>
        <li>Repair of wood stairs and railings</li>
        <li>Cabinets: installation, repair, and custom builds</li>
        <li>Trim and decorative moldings</li>
        <li>Repair of windows and doors</li>
        <li>Custom finish carpentry</li>
      </ul>

      <p class="mt-4 max-w-3xl">We can also perform any of the routine home maintenance tasks done by a traditional handyman, which we will perform with the care and attention to detail of a master carpenter.</p>
    </div>

    <div class="mt-10 max-w-4xl">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Example projects</h2>
      <p class="mt-4">Here are a few of our past projects related to historic home restoration and renovation:</p>
      <ul class="mt-4 ml-1">
        <li>
          <RouterLink to="/portfolio/flood-renovation" class="underline hover:text-blue-600 !text-xl">
            Repairing flood damage in a 1901 Princeton home.
          </RouterLink>
        </li>
      </ul>
    </div>



  </div>

</template>
