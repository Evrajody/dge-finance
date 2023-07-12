
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeDasharray="22" strokeDashoffset="22" strokeLinecap="round" strokeWidth="2"><path d="M19 5L5 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="22;0"></animate></path><path d="M5 5L19 19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="22;0"></animate></path></g></svg>
</template>


<script lang="ts" setup>
  const props = defineProps({
    width: String,
    height: String,
  })
</script>