<script setup>
import ProductPanel from './ProductPanel.vue'
</script>
<template>

  <div class="">
    <p class="text-center text-5xl font-['Latin_Modern_Roman']">Services</p>

    <ProductPanel
      class="mt-5 md:mt-12"
      :reverse="true"
      imgFile="sntolj.jpg"
      imgAlt="Flowers"
      titleText="Home additions and renovations"
      linkText="Read more"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </ProductPanel>

    <ProductPanel
      class="mt-8 md:mt-16"
      :reverse="false"
      imgFile="fog.jpg"
      imgAlt="Flowers"
      titleText="Restoration of antique pieces"
      linkText="Read more"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </ProductPanel>

    <ProductPanel
      class="mt-8 md:mt-16"
      :reverse="true"
      imgFile="fog.jpg"
      imgAlt="Flowers"
      titleText="Custom-built furniture and cabinets"
      linkText="Read more"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </ProductPanel>

    <ProductPanel
      class="mt-8 md:mt-16"
      :reverse="false"
      imgFile="fog.jpg"
      imgAlt="Flowers"
      titleText="More"
      linkText="Read more"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </ProductPanel>

  </div>

</template>
