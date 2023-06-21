<script setup>

const props = defineProps({
  title: String,
})

</script>


<template>
  <div
    class="w-full bg-finance-gray">
    <div class="flex flex-col justify-center items-center md:items-start container mx-auto py-5 px-2">
      <div class="py-4 px-20 grid place-content-center bg-finance-gray">
        <h4 class="text-xl lg:text-3xl text-center md:text-left font-bold leading-normal max-w-2xl text-finance-late">
          {{ props.title }}
        </h4>
      </div>
    </div>
  </div>
</template>