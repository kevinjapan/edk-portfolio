<script setup lang="ts">


const props = defineProps<{
   title: string
}>()


</script>

<template>
   
      <section class="titles">

        
         <li> {{ props.title }}</li>

      </section>

</template>

<style scoped>
section {
   padding-left:1.5rem;
}
p {
   width:100%;
   margin:0;
   padding:0;
}
li {
   list-style:disc;
}

</style>