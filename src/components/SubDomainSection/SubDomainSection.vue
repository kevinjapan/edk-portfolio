<script setup lang="ts">


const props = defineProps<{
   title: string
}>()


</script>

<template>
   
      <section class="titles">

        
         subdomain: {{ props.title }}

         <slot/>
      </section>

</template>

<style scoped>


</style>