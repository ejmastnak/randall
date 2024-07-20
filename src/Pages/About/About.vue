<template>

  <div class="max-w-5xl py-12">

    <div>
      <h1 class="text-5xl font-['Latin_Modern_Roman']">About us</h1>

      <div class="mt-10 max-w-2xl">

        <p>
          Artisanal Restoration is the one-man company of master carpenter and cabinetmaker Randall Basti.
        </p>

        <p class="mt-5">
          Randall has been woodworking since high school and carries over three decades of professional experience in carpentry and adjacent trades.
          After an N-year detour working as X for Bank of America in the 20N0s, where he gained valuable experience in management, administration, and business operations, he opened Artisanal Restoration and has spent N successful years serving historic homes in the Central New Jersey area.
        </p>
      </div>
    </div>

    <!-- Mobile image -->
    <div class="sm:hidden mt-6">
      <img 
      src="/src/assets/img/handrail-profile.jpg"
      alt="Detail image of a custom profile carved into a staircase handrail"
      class="h-60 w-full max-w-md mx-auto object-cover rounded-md"
    />
    </div>

    <!-- Services -->
    <div class="mt-8 sm:mt-10 ">
      <h2 class="text-4xl font-['Latin_Modern_Roman']">Services</h2>
      <div class="sm:flex flex-row-reverse">

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

          <p class="mt-4 max-w-2xl sm:max-w-lg">
            We specialize in the renovation and restoration of historic homes, restoration of antique furniture, and in custom-built furniture and cabinetry,
            but offer many other carpentry and home improvement services.
            For a full list of services, see <RouterLink to="/services" class="text-blue-500 hover:underline hover:text-blue-600">our Services page.</RouterLink>
          </p>

          <!-- Desktop contact button -->
          <RouterLink to="/services" class="hidden md:block w-fit block mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
            Full list of services
          </RouterLink>

        </div>

      </div>

      <!-- Mobile link to more services -->
      <RouterLink to="/services" class="md:hidden w-fit block mt-6 sm:mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
        Full list of services
      </RouterLink>

    </div>

    <div class="mt-8 max-w-2xl">
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

  </div>

</template>
