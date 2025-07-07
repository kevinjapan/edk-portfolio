<script setup lang="ts">


const props = defineProps<{
   title: string
}>()


</script>

<template>
   
      <section class="titles">

        
         <h4> {{ props.title }}</h4>


         <ul><slot/></ul>
      </section>

</template>

<style scoped>
section {
   padding-left:2rem;
   margin:1rem 0;
}
h4 {
   font-size:1.2rem;
   font-weight:600;
   margin:0;
   padding:0;
}
ul {
   margin:0;
   padding:.5rem;
}
</style>