<script setup lang="ts">
import { onBeforeMount } from 'vue'


// AboutView


onBeforeMount(async() => {
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})

</script>


<template>

   <section class="view_section mt_0">
      <h1>About</h1>
   </section>

</template>


<style scoped>

h1 {
   width:100%;
   text-align:center;
   margin:2rem 0 0 0;
   padding-bottom:1rem;
}
h1 {
   font-weight:200;
}
.mt_0 {margin-top:0;}
@media screen and (max-width: 768px) {
   section.view_section {
      margin-top:3rem;
   }
}
</style>
