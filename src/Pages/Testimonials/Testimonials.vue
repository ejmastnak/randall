<script setup>
import Testimonial from '@/Components/Testimonial.vue'
</script>
<template>

  <div class="max-w-5xl py-16">

    <h1 class="text-5xl font-['Latin_Modern_Roman']">Testimonials</h1>

    <p class="mt-10 max-w-3xl">
      Here is a selection of testimonials about Artisanal Restoration and owner Randall Basti. 
        You can find more reviews on <a class="text-blue-600 hover:underline hover:text-blue-700" href="https://www.homeadvisor.com/rated.ArtisanalRestoration.51600239.html">HomeAdvisor</a>.
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

      <li>
        <Testimonial client="John K." :reverse="true">
          Randall did a great job working in our 1872 Victorian house. We asked him to repurpose an original interior door. He had some great suggestions on the best way to hang the door and utilize new and antique hardware. He notified us in advance what time he would arrive. He was very careful when he was working in our house. He cleaned up thoroughly during the job, not just after completing the day's activities. Randall is a skilled carpenter who is also a nice person.
        </Testimonial>
      </li>

      <li>
        <Testimonial client="Cynthia K." :reverse="false">
          Randall did an excellent job on upgrading the exterior of my home with new window headers, shutters, trim and repairs. I am extremely happy with how it turned out, the service I received, his attention to detail and the quality workmanship. I have already had many complimenting neighbors asking me who did the work! Randall is very professional, easy going and someone you can trust to have work on your home. I highly recommend him.
        </Testimonial>
      </li>

    </ul>

    <p class="mt-8">
      You can find more review of Artisanal Restoration on <a class="text-blue-600 hover:underline hover:text-blue-700" href="https://www.homeadvisor.com/rated.ArtisanalRestoration.51600239.html">HomeAdvisor</a>.
    </p>

  </div>

</template>
