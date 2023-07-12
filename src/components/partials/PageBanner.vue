<script lang="ts" setup>
import { ref } from 'vue';


const props = defineProps({
  title: String,
})

const imageBannerPage = ref('https://img.freepik.com/photos-gratuite/coup-moyen-femme-souriante-exterieur_23-2149351946.jpg')

</script>


<template>
  <div
    class="w-full bg-black bg-opacity-20 bg-blend-overlay" :style="{ backgroundImage: `url(${imageBannerPage})`, backgroundPositionY: '30%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="container flex flex-col justify-center items-center py-10 px-6 mx-auto md:items-start lg:px-0">
      <div class="grid place-content-center py-4 px-20">
        <h4 class="text-xl font-bold leading-normal text-center text-white md:text-left lg:text-3xl">
          {{ props.title }}
        </h4>
      </div>
    </div>
  </div>
</template>