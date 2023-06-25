<script setup>
import { ref } from 'vue';


const props = defineProps({
  title: String,
})

const imageBannerPage = ref('https://img.freepik.com/photos-gratuite/coup-moyen-femme-souriante-exterieur_23-2149351946.jpg')

</script>


<template>
  <div
    class="w-full bg-black bg-opacity-20 bg-blend-overlay" :style="{ backgroundImage: `url(${imageBannerPage})`, backgroundPositionY: '30%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="flex flex-col justify-center items-center md:items-start container mx-auto py-10 px-6 lg:px-0">
      <div class="py-4 px-20 grid place-content-center">
        <h4 class="text-xl lg:text-3xl text-center md:text-left font-bold leading-normal text-white">
          {{ props.title }}
        </h4>
      </div>
    </div>
  </div>
</template>