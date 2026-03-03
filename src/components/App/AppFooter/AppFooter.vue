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
   padding:2rem 2rem 1rem 2rem;
   /* background:#36454f; */
   background:var(--bg_dark);
   color:white;
   font-size:.95rem;
   width:100%;
   text-align:center;
   user-select:none;
}

</style>