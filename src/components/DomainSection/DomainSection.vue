<script setup lang="ts">


const props = defineProps<{
   title: string
}>()


</script>

<template>
   
   <section class="titles">        
      <h3>{{ props.title }}</h3>
      <section class="no_subsections_wrap"><ul><slot/></ul></section>
   </section>

</template>

<style scoped>
   
/* for spacing */
section.no_subsections_wrap {
   margin:1rem 0;
}

h3 {
   font-size:1.5rem;
   font-weight:700;
   /* to do : rollout nr dark color for headers */
   color:hsl(180, 25%, 10%); 
   margin:0;
   padding:0;
}
ul {
   margin:0;
   padding:0;
}
</style>