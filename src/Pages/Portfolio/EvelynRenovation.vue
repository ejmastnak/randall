<script setup>
import SimpleImagePanel from '@/Components/SimpleImagePanel.vue'

import evelynBeforeImg from '@/assets/img/portfolio/evelyn/before.jpg'
import evelynFramingFloorImg from '@/assets/img/portfolio/evelyn/framing-floor.jpg'
import evelynSubfloorImg from '@/assets/img/portfolio/evelyn/subfloor.jpg'
import evelynFloorImg from '@/assets/img/portfolio/evelyn/floor.jpg'
import evelynCompleteImg from '@/assets/img/portfolio/evelyn/complete.jpg'
</script>
<template>
  <div class="max-w-5xl py-12">
    <h1 class="text-5xl font-['Latin_Modern_Roman']">Flood damage repair in a historic home</h1>

    <SimpleImagePanel
      class="mt-12"
      :reverse="true"
      :imgSrc="evelynBeforeImg"
      imgAlt="The first floor when starting the job."
      imgCaption="The first floor when starting the job."
      imgClasses="h-60 w-full max-w-sm mx-auto md:h-80 md:max-w-md"
    >
        <p class="max-w-xl">
          <strong class="font-bold">Background:</strong>
          An upstairs bathroom fixture cracked while the homeowners travelling out of the country, leaving water flowing for days in the second floor bathroom, through the first floor ceiling, and across an entire wing of the first floor.
          Besides direct water damage to the hardwood floors, doors, and furniture, the hot, humid summer weather led to mold growth over the entire interior surface of flooded area, forcing the homeowner to tear out the interior walls, ceiling, and floor, leaving only bare studs and the exterior masonry wall.
        </p>

      <p class="mt-5">This page showcases the first floor, focusing on one area for conciseness and to make it easy to follow the progression through the job.</p>
    </SimpleImagePanel>

    <h2 class="mt-10 text-4xl font-['Latin_Modern_Roman'] text-center">The restoration</h2>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="evelynFramingFloorImg"
      imgAlt="In the process of reframing the first-floor bathroom with stronger lumber."
      imgCaption="In the process of reframing the first-floor bathroom with stronger lumber."
      imgClasses="h-64 w-full max-w-md mx-auto md:h-80 object-top"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The restoration began by identifying and solving two structural issues: first, negligent plumbing work in the 1950s left gaping notches cut into the first floor's main supporting beams, causing both the floor and the walls above it to sag;
        second, a haphazard conversion of the first-floor bathroom in the 1980s left the floor framed with 2x4s—completely insufficient to support the floor and causing considerable sagging and squeaking.
      </p>

      <p class="max-w-2xl mt-2">
        Artisanal Restoration reinforced the 100-year-old basement framing with modern bolts and joist hangers, raised the sagging floor beam with steel posts placed in the basement, removed the weak 2x4 framing, and reframed the floor with stronger 2x6 and 2x8 lumber.
        The result: a solid, reliable structural base on which to continue the rest of the renovation, and the sagging, squeaky first-floor fixed.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-10"
      :reverse="false"
      :imgSrc="evelynSubfloorImg"
      imgAlt="The first floor reframed, with new subfloor installed."
      imgCaption="The first floor reframed, with new subfloor installed."
      imgClasses="h-72 w-full max-w-md mx-auto md:h-80 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        The project continued by reframing the interior walls, ceilings, and door frames;
        running new electrical wiring and plumbing lines;
        removing the decaying 20th-century subfloor; adding insulation to the exterior walls wherever possible; and installing a new 3/4" plywood subfloor and 1/2" plywood underlayment—this solid floor surface would ensure the soon-to-be-installed hardwood floor would be squeak-proof.
      </p>

      <p class="max-w-2xl mt-2">
        Great care was taken during the framing process, using furring strips, custom on-site cuts of lumber, and nailing strips, to ensure the plane of the new interior walls and ceilings exactly blended into the existing walls and ceilings in the undamaged part of the house.
        This extra work ensured there would be no bumps, bellies, or gaps where newly installed drywall met the existing drywall in the undamaged parts of the house.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-8"
      :reverse="true"
      :imgSrc="evelynFloorImg"
      imgAlt="The first floor hallway coming together after installtion of drywall and finish flooring."
      imgCaption="The first floor hallway coming together after installtion of drywall and finish flooring."
      imgClasses="h-72 w-full max-w-md mx-auto md:h-80 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Drywall and hardwood finish flooring was installed by dedicated subcontractors, whom Artisanal Restoration has worked with for many years.
        Both installations went seamlessly thanks to the careful work on Artisanal Restoration's part in the framing stage to ensure that walls, ceilings, and subfloor were square, plumb, and planar—in fact, both subcontractors mentioned not only how much easier this made their job, but that the extra care taken by Artisanal Restoration was crucial for good-quality installations on the subcontractors' parts.
      </p>
    </SimpleImagePanel>

    <SimpleImagePanel
      class="mt-8"
      :reverse="false"
      :imgSrc="evelynCompleteImg"
      imgAlt="Foo"
      imgCaption="Restored finish carpentry—note the detailed door headers, plinth blocks, and baseboards, all custom-milled and assembled by hand."
      imgClasses="h-72 w-full max-w-md mx-auto md:h-96 md:max-w-lg"
      captionClasses="max-w-sm"
    >
      <p class="max-w-2xl">
        Great care was taken during the final stages of the project to restore the elaborate 20th century trim and moldings along the doors, floors, ceilings, and windows.
        This stage came with a significant hurdle: because of a careless demolition job (from before Artisanal Restoration took over the project), all trim, headers, and moldings—custom-built for the house in the 20th century—were piled with the flooded, moldy drywall and thrown out.
      </p>

      <p class="mt-2">
        Taking this in stride, Artisanal Restoration reverse-engineered the existing trim profiles in the undamaged parts of the house, ordering cutter heads to custom-mill matching profiles for the new finish carpentry, and painstakingly hand-assembled and installed all door headers, plinth blocks, baseboards, and other trim.
        The result: a perfect match, faithful to the original work in this historic home.
      </p>

      <p class="mt-2">
        With finish carpentry complete dedicated painting subcontractors completed the job.
      </p>
    </SimpleImagePanel>


  </div>
</template>
