<script setup>

// ButtonGroup
// ------------------------------------------

// client can specify styles for Card (applied to li container)
defineProps({
  classes: String,
  bg_color: String
})

</script>


<template>

   
      <section class="button_group" :class="classes ">
         <slot></slot>
      </section>

</template>

<style scoped>
/*
Common components can't style elements to Design specific styles
*/

section.button_group {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-pack:start;
   -ms-flex-pack:start;
   justify-content:flex-start;
   -ms-flex-item-align:start;
   align-self:flex-start;
   width:100%;
}zz
section.button_group.left {
   -webkit-box-pack:start;
   -ms-flex-pack:start;
   justify-content:flex-start !important;
   -ms-flex-item-align:start;
   align-self:flex-start !important;
}
section.button_group.center {
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center !important;
   -ms-flex-item-align:center;
   align-self:center !important;
}

@media screen and (max-width: 1045px) {  
   section.button_group.center_sm {
      -webkit-box-pack:center;
      -ms-flex-pack:center;
      justify-content:center !important;
      -ms-flex-item-align:center;
      align-self:center !important;
   }
}
section.button_group.mb_2 {
   margin-bottom:2rem !important;
}


@media screen and (max-width: 1045px) { 
   .mt_20_sm {margin-top:20rem !important;}
   .mb_2_sm {margin-bottom:2rem !important;}
   .pt_3_sm {padding-top:3rem !important;}
   .pb_3_sm {padding-bottom:3rem !important;}
}
</style>




