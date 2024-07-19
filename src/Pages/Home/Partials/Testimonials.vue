<script setup>
import Testimonial from '@/Components/Testimonial.vue'
</script>
<template>

  <div>
    <h2 class="text-center text-5xl font-['Latin_Modern_Roman']">Testimonials</h2>

    <p class="mt-10">
      Here is a selection of testimonials about Artisanal Restoration and owner Randall Basti:
    </p>

    <ul class="mt-10 ml-5 space-y-8">

      <li>
        <Testimonial client="Kathy L." :reverse="false">
          Artisanal Restoration returned my phone call immediately and came out the next day to evaluate our home repair project. Not only did Randall show up on time, but instead of just providing a quote and leaving, he actually undertook the repairs immediately. We were so impressed by his professionalism and knowledge. He made excellent suggestions about ways to reduce the cost of our repairs and provided us with alternatives. His workmanship was excellent and he arrived with his own vacuum! I couldn't tell when I got home that a ceiling repair was done. There was no dust anywhere. We are delighted to have found this company and will absolutely be using them for all our carpentry and home repair projects in the future.
        </Testimonial>
      </li>

      <li>
        <Testimonial client="Cara B." :reverse="true">
          He is a perfectionist. He takes the time to make the job perfect. He has never had to come back and redo a project for us. Getting Randall is the best thing anyone could do. 
        </Testimonial>
      </li>

      <li>
        <Testimonial client="David C." :reverse="false">
          I hired Artisanal Restoration to restore my deck, frame interior windows and doorways, install a kitchen exhaust fan, and paint interior trim install shades. Randall Basti, who did the work, is peerless in the quality of what he does; he knows the right way to do the complete range of things needed for your improvement projects. He does not cut corners. If you want quality work, AR is the way you will get it. There is more work to be done at my place and I am happy I know who will be doing it. You will be pleased and you will have no regrets if you have AR do the work.
        </Testimonial>
      </li>

    </ul>

    <RouterLink to="/testimonials" class="w-fit block mt-3 md:mt-8 mx-auto rounded-md border border-gray-600 px-4 py-2 text-xl hover:bg-gray-50 hover:border-gray-900 ">
      More testimonials
    </RouterLink>

  </div>

</template>
