<script setup>

// TextOverlay
// ---------------------------------------------------------------
// Clients declare Title HTML Elements
// Since clients pass in HTML elements suchs as h1 | h2 | .. - we can vary the heading level etc inside Common Components 
// without coupling or dynamic assigning - the client declares and passes in the HTML element.
// We set 'min-height' (which generaly appears in lg) to allow mobile height to increase as text stacks up)


import ButtonGroup from '../ButtonGroup/ButtonGroup.vue'

   
// client can specify styles for Card (applied to li container)
defineProps({
   classes: String,
   overlay_text_classes: String,
   heading: String,
   bg: String,
   opacity: String,
   pos: String,
   border: String,
   inner_border: String,
   width: String,
   height: String,
   align: String
})


</script>

<template>

   <section 
      class="text_overlay text_overlay_hero " 
      :class="classes"  
      :style="'border:' + border + ';width:' + width + ';height:' + height + ''" >

         <section 
            class="text_overlay_texts " 
            :class="overlay_text_classes"  
            :style="'border:' + inner_border + ';'">

               <section class="flex flex_cols gap_1" :class="align" style="margin:0;" >
                  <section class="flex flex_cols gap_.5" :class="align"  >
                     <slot name="title"></slot>
                     <slot name="tagline"></slot>
                  </section>
                  <slot name="text"></slot>
               </section>

               <slot name="buttons"></slot>

         </section>

         <section 
            class="overlay_dimmer" 
            :style="'background:' + bg + ';opacity:' + opacity + ';'">
         </section>

   </section>

</template>


<style scoped>
/*
Common components can't style elements to Design specific styles
*/

section.text_overlay {
   min-height:fit-content !important;
   max-width:100%;
}

section.text_overlay_texts {
   width:100% !important;
   height:fit-content;
}

section.text_overlay > section.overlay_dimmer {
   position:absolute;
   top:0;left:0;
   width:100%;height:100%;
   z-index:-1;
   background:black;
}


@media screen and (max-width: 1045px) {
   section.text_overlay {
      padding:0 !important;
   }
   section.cover_block section.text_overlay {
      /* let overlay cover whole block / img */
      /* height:fit-content !important; */
      text-align:center;
   }
}

</style>