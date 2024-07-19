<script setup>
import ServicePanel from './ServicePanel.vue'
</script>
<template>

  <div class="max-w-6xl mx-auto">
    <p class="text-center text-5xl font-['Latin_Modern_Roman']">Services</p>

    <ServicePanel
      class="mt-5 md:mt-12"
      :reverse="true"
      imgFile="evelyn-front.jpg"
      imgAlt="A 1910 home in Princeton, NJ served by Artisanal Restoration"
      imgClasses="h-56 md:h-80"
      titleText="Renovation and restoration of historic homes"
      linkText="Read more"
    >
      Artisanal Restoration specializes in the service of historic homes, handling everything from routine maintenance to full-on renovations.
      Decades' experience working on houses from the 18th century onwards coupled with a meticulous eye for detail and high technical skill let us recognize and adapt to each home's history eccentrities and history on a case by case basis.
      Our work will always be age-appropriate and preserve the unique character of your home.
    </ServicePanel>

    <ServicePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      imgFile="furniture-restoration.jpg"
      imgAlt="An antique table being restored in the Artisanal Restoration workshop"
      imgClasses="object-right-bottom "
      titleText="Restoration of antique pieces"
      linkText="Read more"
    >
      We will happily refresh worn finishes, restore scratched and chipped surfaces, and repair structural damage in antique furniture and cabinetry.
      Master carpenter Randall Basti of Artisanal Restoration has the technical skill to handle the complex joinery and intricate ornamentation found in historic pieces, along with the eye for detail to ensure the repair is done right—preserving the unique personality of the original piece.
    </ServicePanel>

    <ServicePanel
      class="mt-8 md:mt-16"
      :reverse="true"
      imgFile="furniture-painting-table.jpg"
      imgAlt="A custom table built to match the art and wall color in a parlor"
      imgClasses="h-56 md:h-96"
      titleText="Custom-built furniture and cabinets"
      linkText="Read more"
    >
      Not only do we build custom furniture and cabinetry to almost any size and specification, we will work with you through the design process from start to finish to ensure the piece exactly fits, both functionally and aesthetically, the special role it will soon fulfill in your home.
      Tell us about your dream piece, and we'll design and create it to match the dimensions, aesthetics, and unique character of your home.
    </ServicePanel>

    <ServicePanel
      class="mt-8 md:mt-16"
      :reverse="false"
      imgFile="deck-overhead.jpg"
      imgAlt="A second-story view of a deck restored by Artisanal Restoration"
      imgClasses="h-56 md:h-80 object-left-bottom"
      titleText="Decks and porches"
      linkText="Read more"
    >
      We offer both restoration and new construction of decks and porches.
      We can repair rot damage, structural issues, and worn finishes, while our new construction includes the full package of foundation, structural framing, decking surface, fences, and stairs.
      Both repairs and new construction made to last, using rot-resistant decking material and finishes, corrosion-resistant hardware, and structural framing built to minimize damage from ground and water contact. 

    </ServicePanel>

    <ServicePanel
      class="mt-8 md:mt-16"
      :reverse="true"
      imgFile="evelyn-stairs-fineal.jpg"
      imgAlt="A detail image of the finish carpentry on a fineal custom-built for a staircase in a Princeton, NJ home"
      titleText="More"
      linkText="Read more"
    >
      Additional services offered by Artisanal Restoration include:
      <ul class="list-disc ml-5 mt-2">
        <li>Bespoke home additions</li>
        <li>Custom trim and finish carpentry</li>
        <li>Stair construction and restoration</li>
        <li>Service of windows and doors</li>
        <li>Interior and exterior rot restoration</li>
        <li>Regular service and maintenance of historic homes</li>
      </ul>

    </ServicePanel>

  </div>

</template>
