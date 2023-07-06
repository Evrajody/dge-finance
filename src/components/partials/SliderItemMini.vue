<script setup>
import { ref } from 'vue';
import FancyButton from './FancyButton.vue';

const props = defineProps({
  sildeText: String,
  slideImage: String,
})

</script>

<template>
  <div class="bg-finance-blue bg-opacity-30 bg-blend-darken h-[500px]">

    <div class="container flex space-x-4 justify-center 2xl:mx-auto h-full">

      <div class="stat bg-red-400 pt-8 w-[45%]">
        <h2 class="text-2xl font-bold text-white px-3">Nos indicateur clés</h2>

      </div>

      <div class="flex items-center w-full h-full"
        :style="{ backgroundImage: `url(${props.slideImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">

        <div class="flex flex-col space-y-8 justify-center items-start max-w-2xl h-full">

          <h2 class="py-8 text-2xl font-bold text-white sm:text-3xl slide-title md:leading-[3rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, hic.
          </h2>

          <FancyButton>
            <template #content>
              Lire la suite
            </template>
          </FancyButton>

        </div>

      </div>

    </div>

  </div>
</template>