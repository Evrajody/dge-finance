<script setup>

const props = defineProps({
  title: String,
  image: String
})

</script>


<template>
  <div
    class="w-full bg-black bg-opacity-60 bg-blend-overlay"  :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="container flex flex-col justify-center py-10 px-6 mx-auto lg:px-0">
      <h4 class="text-xl font-bold text-white lg:text-3xl leading-2">
          {{ props.title }}
        </h4>
    </div>
  </div>
</template>