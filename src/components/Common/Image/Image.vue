<script setup>


// client can specify styles for Card (applied to li container)
defineProps({
  classes: String,
  height: String,
  img_src: String,
  img_alt: String
})


</script>


<template>

   <img :src="img_src" :alt="img_alt" :class="classes" />


</template>