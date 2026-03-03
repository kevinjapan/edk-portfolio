<script setup>

// CoverBlock
// -----------------------------------------------


import Image from '@/components/Common/Image/Image.vue'
import TextOverlay from '@/components/Common/TextOverlay/TextOverlay.vue'
import ButtonGroup from '../ButtonGroup/ButtonGroup.vue';

// Problem : Unless we specify base styles - eg font-family - this component will adopt from khwDesigns outline.css styles - 
// Solution : we pass in HTML elements - so they are declared and styled in Design View file - thus not coupled to common
// component. Also benefits that client can very eg heading level to be used by the Common component.




// client can specify styles for Card (applied to li container)
defineProps({
  classes: String,
  width: String,
  height: String,
  img_src: String,
  img_alt: String,
  text_overlay_heading: String,
  text_overlay_bg: String,
  text_overlay_classes: String,
  text_overlay_font_family: String,  // we have to specify font-family since our designs will otherwise adopt khwDesigns font-family
  text_overlay_text_classes: String,
  text_overlay_bg_opacity: String,
  text_overlay_position: String,
  text_overlay_border: String,
  text_overlay_inner_border: String,
  text_overlay_gap: String,
  text_overlay_width: String,
  text_overlay_height: String,
  text_overlay_align: String,
  button_group_classes: String
})


// Overlay Position 
// Use utility classes - eg mt_x - in combo with text_overlay_position - eg 'right bottom'
// We rely on $slots.title for absence|presence of text overlay

</script>


<template>

   <section class="cover_block bg_navy" :class="classes" :style="'width:' + width +';height:' + height + ''" >

      <Image v-if="img_src" :img_src="img_src" :img_alt="img_alt" classes="bg_img" />

      <TextOverlay
         v-if="$slots.title"
         :classes="text_overlay_classes"
         :overlay_text_classes="text_overlay_text_classes"
         :heading="text_overlay_heading"
         :bg="text_overlay_bg" 
         :opacity="text_overlay_bg_opacity"
         :pos="text_overlay_position"
         :border="text_overlay_border"
         :inner_border="text_overlay_inner_border"
         :width="text_overlay_width"
         :height="text_overlay_height"
         :align="text_overlay_align">

            <template v-if="$slots.title" v-slot:title><slot name="title"></slot></template> 
            <template v-if="$slots.tagline" v-slot:tagline><slot name="tagline"></slot></template> 
            <template v-if="$slots.text" v-slot:text><slot name="text"></slot></template>
            <template v-if="$slots.buttons" v-slot:buttons>
               <ButtonGroup :classes="button_group_classes">
                  <slot name="buttons"></slot>
               </ButtonGroup>
            </template>

      </TextOverlay>

   </section>
   
</template>


<style scoped>
/*
Common components can't style elements to Design specific styles
*/

/* 
   COVER_BLOCK
*/
/* section.cover_block ---------------------- */
/* large heading over background img - plus optional text & button */
section.cover_block {
   position:relative;
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   padding:0;
   overflow:hidden;
   background:transparent;
   color:white;
}
/* img dimmer */
section.cover_block::before {
   content:'';
   position:absolute;
   top:0;
   left:0;
   z-index:0;
   width:100%;
   height:100%;
   background:black;
   opacity:0;
}
section.cover_block:has(div) {
   height:fit-content;
}
section.cover_block p {
   margin:auto 0 auto 0;
}
section.cover_block .bg_img {
   position:absolute;
   top:0;
   left:0;
   z-index:-1;
   width:100%;
   height:100%;
   -o-object-fit:cover;
   object-fit:cover;
   background-position:bottom;
}
section.cover_block section.text_overlay {
   position:absolute;
   display:-ms-grid;
   display:grid;
   -ms-grid-columns:1fr;
   grid-template-columns:1fr;    
   gap:1rem;
   width:fit-content;
   margin-left:.5rem;
   margin-right:.5rem;
   /* min-width:fit-content; */
}
section.cover_block section.text_overlay > section.text_overlay_texts {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   flex-direction:column;
   padding:.5rem;
}
section.cover_block button {
   color:hsl(0, 0%, 90%);
   border:solid 1px hsl(0, 0%, 90%);
}
section.cover_block button:hover{
   color:hsl(0, 0%, 100%);
   border:solid 1px white;
}
section.cover_block.center p {
   width:100%;
   text-align:center;
}
section.cover_block.center button {
   margin-left:auto;
   margin-right:auto;
}


</style>