<template>

  <div
    class="flex flex-col bg-[url('@/assets/img/hero.png')] bg-cover bg-no-repeat
    border border-white"
    :class='{
    "h-[22rem]": true, "bg-[center_top_-2rem]": true,
    "xxxxs:h-[23rem]": true, "xxxxs:bg-[center_top_-1rem]": true,
    "xxxs:h-[21rem]": true, "xxxs:bg-[center_top_-3rem]": true,
    "xxs:h-[25rem]": true, "xxxs:bg-[center_top_-5rem]": true,
    "xs:h-[30rem]": true, "xxxs:bg-[center_top_-6rem]": true,
    "sm:h-[36rem]": true, "sm:bg-[center_top_-4rem]": true,
    "md:h-[44rem]": true, "sm:bg-[center_top_-6rem]": true,
    "lg:h-[48rem]": true, "sm:bg-[center_top_-6rem]": true,
    }'
  >

    <div class="text-white flex flex-col h-full" >
      <!-- Artisanal Restoration -->
      <div
        class="text-white drop-shadow-[.4px_.4px_rgba(0,0,0,1)] font-['Latin_Modern_Roman'] bg-gray-900/5 w-fit px-5 py-3 rounded
        hidden
        md:block md:mt-4 md:ml-4
        lg:mt-8 lg:ml-8
        "
      >
        <p class="text-4xl xs:text-5xl sm:text-6xl -ml-1 font-bold">Artisanal</p>
        <p class="text-5xl xs:text-6xl sm:text-7xl -mt-1 font-bold">Restoration</p>
      </div>
      <!-- Descriptive text -->
      <p
        class="text-white max-w-sm bg-gray-900/70 rounded-md font-medium mt-auto border border-gray-700"
        :class='{
        "text-sm": true, "mb-1": true, "px-4": true, "py-2": true,
        "xxs:text-base": true, "xxs:mb-2": true, "xxs:!leading-snug": true,
        "xs:text-lg": true, "xs:mb-3": true, "sm:px-6": true, "sm:py-4": true,
        "sm:text-xl": true, "sm:mb-5": true, "sm:max-w-md": true,
        "md:mb-5": true, "md:ml-4": true,
        "lg:ml-6": true
        }'
      >
        Restoration, renovation, and maintenance of historic homes in the Central New Jersey area, with a 17-year track record of quality workmanship and happy customers.
      </p>
    </div>

    <!-- Curvy solid color at bottom of hero image to give curve effect -->
    <div 
      class="mt-auto"
      :class='{
      "mb-6": true,
      "xxxxs:mb-0": true,
      }'
    >
      <svg
        viewBox="0 0 200 25"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg">
        <defs
        id="defs2" />
        <g>
          <path
          style="fill:#ffffff;stroke:#ffffff;stroke-width:1;"
          d="M 0.5,0.61317269 V 27.224413 H 224.44528 V 5.2916727 c 0,0 -41.39009,9.9209603 -60.77218,10.1207103 -22.61969,0.23311 -44.53559,-9.6755303 -67.156299,-9.7660303 -9.893947,-0.0396 -19.512328,4.031 -29.406352,4.03636 C 44.7021,9.6948127 0.5,0.61317269 0.5,0.61317269 Z"
          id="path3953" />
        </g>
      </svg>
    </div>

  </div>

</template>
