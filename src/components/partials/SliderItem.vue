<script setup>
import { ref } from 'vue';
import FancyButton from './FancyButton.vue';

const props = defineProps({
  sildeText: String,
  slideImage: String,
})

</script>

<template>
  <div class="bg-black bg-opacity-40 bg-blend-darken h-[80vh]"
    :style="{ backgroundImage: `url(${props.slideImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">

    <div class="container mx-auto px-10 h-full flex flex-col items-center justify-center">

      <div class="w-full flex items-center h-full">

        <div class="max-w-2xl h-full flex flex-col gap-8 items-start justify-center">

          <h2  class="py-8 text-2xl sm:text-4xl slide-title text-white font-bold md:leading-[2.80rem]">
            {{ props.sildeText }}
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