<script setup>

const props = defineProps({
  title: String,
  image: String
})

</script>


<template>
  <div
    class="w-full bg-blend-overlay bg-black bg-opacity-60"  :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }">
    <div class="flex flex-col justify-center container mx-auto py-10 px-6 lg:px-0">
      <h4 class="text-xl lg:text-3xl font-bold leading-2 text-white">
          {{ props.title }}
        </h4>
    </div>
  </div>
</template>