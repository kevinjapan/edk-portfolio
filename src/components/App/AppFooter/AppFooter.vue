<script setup lang="ts">
import { ref } from 'vue'

const today = new Date()
const copyright_date = ref(today.getFullYear())

</script>


<template>

   <section>
      Copyright &copy; Kev Hastie 2021 - {{ copyright_date }}
   </section>

</template>

<style scoped>

section {
   margin-top:4rem;
   padding:4rem 2rem 4rem 2rem;
   background:#36454f;
   color:white;
   font-size:.95rem;
   width:100%;
   text-align:center;
   user-select:none;
}

</style>