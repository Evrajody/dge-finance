<script setup>

const props = defineProps({
  title: String,
})

</script>


<template>
  <div
    class="w-full bg-center bg-black bg-opacity-30 bg-blend-overlay relative bg-cover bg-no-repeat bg-[url('https://presidence.bj/upload/images/articles/473860782565001684770264.jpeg')] ">
    <div class="flex flex-col justify-center items-center md:items-start container mx-auto py-10 px-2">
      <div class="py-4 px-32 grid place-content-center bg-finance-gray rounded-md shadow absolute -bottom-11">
        <h4 class="text-3xl text-center md:text-left font-bold leading-normal text-finance-late">
          {{ props.title }}
        </h4>
      </div>
    </div>
  </div>
</template>