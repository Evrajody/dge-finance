
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h18v2H3V4Zm6 7h12v2H9v-2Zm-6 7h18v2H3v-2Z"></path></svg>
</template>


<script lang="ts" setup>
  const props = defineProps({
    width: String,
    height: String,
  })
</script>