<template>

  <div>
    <!-- Title -->
    <h2 class="text-center text-4xl md:text-5xl font-['Latin_Modern_Roman']">About</h2>
    <div class="md:flex mt-4 md:mt-10 px-6  text-gray-700">
      <!-- Image -->
      <img 
      src="@/assets/img/placeholder.png"
      alt="Artisanal Restoration logo"
      class="h-56 w-60 mx-auto md:w-96 md:h-96 object-cover rounded-md"
    />
      <div class="md:px-8 py-4 md:py-6 lg:ml-12">

        <p class="max-w-2xl">
          Artisanal Restoration is the one-man company of master carpenter and cabinetmaker Randall Basti, and specializes in the restoration, renovation, and maintenance of historic homes in the Central New Jersey area.
        </p>

        <p class="mt-5 max-w-2xl">
          Randall has been woodworking since high school and carries over three decades of professional experience in carpentry and adjacent trades.
          After an N-year detour working as X for Bank of America in the 20N0s, where he gained valuable experience in management, administration, and business operations, he opened Artisanal Restoration and has spent N successful years serving historic homes in the Central New Jersey area.
        </p>

        <RouterLink to="/about" class="w-fit block mt-3 md:mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
          More about us
        </RouterLink>

      </div>
    </div>
  </div>

</template>
