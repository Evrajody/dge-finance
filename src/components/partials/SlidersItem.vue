<script lang="ts" setup>

  import FancyButton from './FancyButton.vue';

  const props = defineProps({
    sildeText: String,
    slideImage: String,
  })

</script>

<template>

  <div class="bg-black bg-opacity-30 bg-blend-darken h-[500px]" :style="{ backgroundImage: `url(${props.slideImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">

    <div class="container flex flex-col justify-center items-center px-3 mx-auto w-full h-full xl:px-10">

      <div class="flex items-center w-full h-full">

        <div class="flex flex-col gap-8 justify-center items-start px-10 max-w-2xl h-full">

          <h2  class="py-8 text-2xl font-bold text-white sm:text-3xl slide-title md:leading-[3rem]">
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