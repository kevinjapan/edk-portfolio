<script setup lang="ts">

const props = defineProps<{
   route_name: string
   label: string
}>()


</script>


<template>

   <div style="margin-top:5rem;" class="sticky">
      <RouterLink 
         :to="{name:props.route_name, params:{}}" 
         class="view_link" activeClass="selected_view" exactActiveClass="selected_view">
            <img src="../../../src/assets/imgs/arrow-return-left.svg" style="border:none;"/> 
            <span>Back to {{ props.label }}</span>
      </RouterLink>
      </div>

</template>


<style scoped>

.view_link {
   display:flex;
   width:fit-content;
   align-items:center;
   gap:.5rem;
   font-weight:400;
   color:blue;
   margin-top:.25rem;
   margin:.25rem auto .25rem auto;
   padding:.15rem;
   padding-left:.25rem;
   padding-right:.25rem;
   border-radius:.5rem;
}

</style>