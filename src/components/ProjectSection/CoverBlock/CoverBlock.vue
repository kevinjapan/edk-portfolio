<script setup lang="ts">

const props = defineProps<{
    section: CoverBlock
}>()


// deconstruct coverImg
const { src, alt } = props.section.coverImg

// future : whitelist and check 'styles' are valid css classnames for this Block
const class_list = props?.section?.styles?.join(' ')

</script>

<template>

    <section class="cover_block fade_in bg_dark_aqua mobile_only"  :class="class_list !== '' ? class_list : ''">
      <img 
         class="bg_img" 
         :src="src" 
         :alt="alt" 
      />
      <div class="overlay">
         <h1>{{ props?.section?.overlay?.heading }}</h1>
         <h2>{{ props?.section?.overlay?.tagline }}</h2> 
         <p>{{ props?.section?.overlay?.text }}</p>
      </div>
   </section>

</template>

<style scoped>

h1 {
   font-size:4.5rem;
   font-weight:300 !important;
   margin:0;
   max-width:80%;
}
h2 {
   font-size:2.8rem;
   font-weight:300 !important;
   margin:0;
   max-width:80%;
}
@media screen and (min-width: 768px) {
   h1 {
      font-size:6rem;
      max-width:fit-content;
   }
   h2 {
      font-size:3.2rem;
      padding-left:3rem;
      max-width:fit-content;
   }
}
</style>
