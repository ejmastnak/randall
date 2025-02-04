<script setup>
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

import beforeImg from '@/assets/img/portfolio/floor-weave/before.jpg?w=600'
import framingImg from '@/assets/img/portfolio/floor-weave/framing.jpg?w=600'
import weaveImg from '@/assets/img/portfolio/floor-weave/weave.jpg?w=600'
import sandedImg from '@/assets/img/portfolio/floor-weave/sanded.jpg?w=600'
import completeImg from '@/assets/img/portfolio/floor-weave/complete.jpg?w=600'

</script>
<template>
  <div class="max-w-5xl py-12">
    <h1 class="text-5xl font-['Latin_Modern_Roman']">Matching 70-year-old hardwood flooring to a fraction of an inch</h1>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="beforeImg"
      imgAlt="The state of the floor after the most damaged boards were removed."
      imgCaption="The state of the floor after the most damaged boards were removed."
      captionClasses="max-w-sm"
      imgClasses="h-72 w-full max-w-sm mx-auto md:h-80 md:max-w-md"
    >
      <p class="max-w-xl">
        <strong class="font-bold">Background:</strong>
        Water damage from flooding—the last straw after decades of wear and tear—forced the homeowner to replace a section of a 1950s tongue-and-groove oak floor.
        The job was complicated by three issues:
      </p>

      <ul class="mt-2 ml-5 list-disc">
        <li>The repaired section would have to seamlessly blend into the undamaged areas of the existing floor.</li>
        <li>When the floor was installed 70 years ago, floorboards were made with thicker wood and slightly larger tongues and grooves than the standard 3/4" boards available today—typical floorboards from current supplies aren't compatible with the original flooring.</li>
        <li>The floor's structural framework of decades-old subfloor and underlying floor joists was decaying and poorly fastened, causing constant squeaks and sagging.</li>
      </ul>

      <p class="mt-4">
        Artisanal Restoration took these challenges in stride, producing a precise and minimally invasive repair.
      </p>
    </SimpleImagePanel>

    <h2 class="mt-10 text-4xl font-['Latin_Modern_Roman'] text-center">The repair</h2>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="framingImg"
      imgAlt="The area below the floor, newly reframed with healthy lumber."
      imgCaption="The area below the floor, newly reframed with healthy lumber to prevent future sagging and squeaking."
      imgClasses="h-72 w-full max-w-sm mx-auto object-bottom"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Artisanal Restoration immediately recognized that it was impossible to perform a quality finish floor installation on a decaying structural framework, so the job began addressing the subfloor and framing under the damaged floor.
      </p>

      <p class="max-w-2xl mt-2">
        The decaying subfloor boards and joists were removed; the floor reframed with healthy 2x8 lumber—more than sufficient to rigidly carry the floor's weight—and modern fasteners.
        The framing required custom cuts and awkward maneuvering to avoid the maze of copper heating pipes in the basement ceiling, but Artisanal Restoration was more than up to the task.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-10"
      :reverse="false"
      :imgSrc="weaveImg"
      imgAlt="The weave of the new floorboards into the existing flooring almost complete."
      imgCaption="The weave of the new floorboards into the existing flooring almost complete—note the seamless fits and transition from new to old boards."
      imgClasses="h-72 w-full max-w-sm mx-auto md:h-80 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The repair continued by installing 3/4" plywood subfloor—with liberal fasteners and construction adhesive to prevent future squeaking—and topping this off flooring paper.
      </p>

      <p class="max-w-2xl mt-2">
        Then came the technical part: to ensure the new floorboards exactly matched the existing floor, Artisanal Restoration painstakingly resawed an additional 1/16" from the grooves of the new boards to accommodate the thicker tongues of the existing 1950s floorboards,
        before seamlessly weaving them in to the existing floor.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="sandedImg"
      imgAlt="The floor after sanding to blend the old and new surfaces. The repaired section is hardly recognizable as different from the original flooring."
      imgCaption="The floor after sanding to blend the old and new surfaces. The repaired section is now hardly recognizable as different from the original flooring."
      imgClasses="h-72 w-full max-w-md mx-auto md:h-80 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Under Artisanal Restoration's supervision, a dedicated flooring subcontractor sanded the existing finish flooring—which was due for a restoration anyway—to blend the old and new floorboards.
      </p>

      <p class="max-w-2xl mt-2">
        The job was completed by staining and finishing the sanded floor surface to protect and bring out the natural beauty of the oak's grain.
        After refinishing, the repaired section blended perfectly into the existing floorboards and, besides the welcome lack of sagging and squeaking, was all but unrecognizable from the original floor.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-8"
      :reverse="false"
      :imgSrc="completeImg"
      imgAlt="The floor after staining and finishing."
      imgCaption="The floor after staining and finishing; the image also features baseboards and plinth blocks, and door casing custom-built for the room by Artisanal Restoration."
      imgClasses="h-72 w-full max-w-md mx-auto md:h-80 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
 While a typical flooring contractor would prefer to tear out the floor in the entire room to avoid dealing with the nuances of accommodating older flooring—and might avoid the underlying structural issues altogether—Artisanal Restoration had the willingness and technical ability to address only the small section of damaged floorboards.
      </p>

      <p class="max-w-2xl mt-2">
        The result: a fast, precise, and far less invasive solution than replacing the whole floor, which saved the homeowner both money and stress while preserving the original parts of the home wherever possible.
      </p>
        
    </SimpleImagePanel>


  </div>
</template>
