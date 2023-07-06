<script setup>
import { ref } from 'vue';
import FancyButton from './FancyButton.vue';

const props = defineProps({
  sildeText: String,
  slideImage: String,
})

</script>

<template>
  <div class="bg-opacity-30 bg-finance-blue bg-blend-darken h-[500px]">

    <div class="container flex justify-center space-x-4 h-full 2xl:mx-auto">

      <div class="stat bg-red-400 pt-8 w-[45%]">
        <h2 class="px-3 text-2xl font-bold text-white">Nos indicateur clés</h2>

      </div>

      <div class="flex items-center w-full h-full"
        :style="{ backgroundImage: `url(${props.slideImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">

        <div class="flex flex-col justify-center items-start space-y-8 max-w-2xl h-full">

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