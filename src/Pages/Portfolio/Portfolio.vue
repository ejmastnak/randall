<script setup>
import ImagePanel from '@/Components/ImagePanel.vue'
import evelynCompleteImg from '@/assets/img/portfolio/evelyn/complete.jpg?w=700'
import andersonCompleteImg from '@/assets/img/portfolio/anderson/complete.jpg?w=700'
import evelynStairsFinealImg from '@/assets/img/portfolio/evelyn-stairs/finial.jpg?w=600'
import evelynFloorWeaveImg from '@/assets/img/portfolio/floor-weave/complete.jpg?w=600'
import sunroomCompleteImg from '@/assets/img/portfolio/sunroom/complete.jpg?w=600'
import deckTwoStoryCompleteImg from '@/assets/img/portfolio/deck-two-story/complete.jpg?w=600'
</script>
<template>

  <div class="max-w-5xl py-12">

    <h1 class="text-5xl font-['Latin_Modern_Roman']">Portfolio</h1>

    <p class="mt-10 max-w-xl">
      Here is a selection of projects representative of work you can expect from Artisanal Restoration—the individual project summaries should showcase some of the attention to details and case-by-case custom work our clients appreciate us for.
    </p>

    <div>

      <ImagePanel
        :reverse="true"
        :imgSrc="evelynCompleteImg"
        imgAlt="Hallway and kitchen of a 1910 home in Princeton, NJ, fully restored after flood damage"
        imgClasses="w-full max-w-lg object-top md:object-center"
        titleText="Repairing flood damage in a historic home."
        linkRoute="/portfolio/flood-renovation"
        linkText="Read more"
      >
        <p>An upstairs bathroom fixture cracked with the homeowners travelling out of the country, leaving water flowing for days through the first floor ceiling.</p>

        <p class="mt-2">Starting from bare studs, Artisanal Restoration framed new walls and ceilings, supervised the installation of new electrical and plumbing fixtures, then repaired the entire damaged wing of the house, exactly matching the original hardwood floor, replicating custom 1920s moldings and trim, and reinstalling built-ins, while also uncovering and correcting structurally unsound basement framing and solving a perennially squeaky floor along the way.</p>
      </ImagePanel>

      <ImagePanel
        class="mt-8 md:mt-16"
        :reverse="false"
        :imgSrc="andersonCompleteImg"
        imgAlt="Renovated facade of a large two-story home after extensive rot repair on exterior trim and window frames."
        imgClasses="h-64 sm:h-72 md:h-80 object-top w-full max-w-lg md:max-w-lg object-right"
        titleText="Extensive exterior rot repair in a multistory home."
        linkText="Read more"
      >
        <p>Extensive rot in the wooden exterior trim and window framing on the facade of a historic multistory home left the home at risk of water intrusion into the home's interior.</p>

        <p class="mt-2">Working both at ground level and on 25-foot extension ladders, Artisanal Restoration removed the rotted wood, insulated exposed cavities in the home's exterior walls, added flashing and waterproof sheathing to prevent future rot, and reframed and reinstalled exterior windows and doors, before restoring exterior trim and finish carpentry.
        </p>
      </ImagePanel>

      <ImagePanel
        class="mt-8 md:mt-16"
        :reverse="true"
        :imgSrc="evelynFloorWeaveImg"
        imgAlt="Renovated facade of a large two-story home after extensive rot repair on exterior trim and window frames."
        imgClasses="h-64 sm:h-72 md:h-80 object-top w-full max-w-lg md:max-w-lg object-right"
        titleText="Matching 70-year-old hardwood flooring to a fraction of an inch."
        linkText="Read more"
        linkRoute="/portfolio/floor-weave"
      >
        <p class="mt-2">Flood damage forced the homeowner to replace a section of a 1950s tongue-and-groove oak floor.
          Artisanal Restoration immediately noticed an important detail: 70 years ago, floorboards were made with slightly larger tongues and grooves than the standard 3/4" boards available today.
        </p>
        <p class="mt-2">
          To ensure the new floorboards would exactly match the existing floor, Artisanal Restoration painstakingly resawed an additional 1/16" from the grooves of the new boards, before expertly weaving them in to the existing floor—all of this after completely reframing the underlying joists and subfloor to solve a perennial squeaking problem.
        </p>
      </ImagePanel>


      <ImagePanel
        class="mt-8 md:mt-16"
        :reverse="false"
        :imgSrc="evelynStairsFinealImg"
        imgAlt="A detail image of the finish carpentry on a fineal custom-built for a staircase in a Princeton, NJ home"
        imgClasses="h-64 sm:h-72 md:h-80 object-top w-full max-w-lg md:max-w-lg object-bottom"
        titleText="Front porch stairs get a makeover."
        linkText="Read more"
      >
        <p>Artisanal Restoration removed old decaying stairs, added a concrete foundation to prevent future decay from ground contact, and reframed the stringers and base plate with healthy wood.</p>
        <p class="mt-2">The new structural framework was covered with beautiful mahogany treads, then topped off with a custom balustrade featuring beautiful finish carpentry details on the rail profile and newel post finials.</p>
      </ImagePanel>

      <!-- <ImagePanel -->
      <!--   class="mt-8 md:mt-16" -->
      <!--   :reverse="true" -->
      <!--   :imgSrc="sunroomCompleteImg" -->
      <!--   imgAlt="A detail image of the finish carpentry on a fineal custom-built for a staircase in a Princeton, NJ home" -->
      <!--   imgClasses="h-80 object-top w-full max-w-lg md:max-w-lg object-top md:object-top" -->
      <!--   titleText="A custom sunroom." -->
      <!--   linkText="Read more" -->
      <!-- > -->
      <!--   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->
      <!-- </ImagePanel> -->

      <ImagePanel
        class="mt-8 md:mt-16"
        :reverse="true"
        :imgSrc="deckTwoStoryCompleteImg"
        imgAlt="A second-story view of a deck restored by Artisanal Restoration"
        imgClasses="h-56 md:h-80 object-left-bottom"
        titleText="A multistory deck restoration."
        linkText="Read more"
      >
        After the homeowner decided to restore a multistory deck decaying and dulling from water and sun exposure, Artisanal Restoration removed the aging surface, reframed the rotting underlying structural framework, added shims and furring strips to ensure a level deck surface, and installed new decking coordinated to match the existing brick siding.
      </ImagePanel>


    </div>

  </div>

</template>
