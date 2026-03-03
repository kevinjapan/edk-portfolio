<script setup lang="ts">
import { onBeforeMount, watchEffect } from 'vue'
import { init_fade_ins } from '@/utilities/intersections/intersections'



onBeforeMount(async() => {
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})

watchEffect(() => {
   setTimeout(() => init_fade_ins(),500)
})


</script>

<template>

   <section class="home_view">

      <!-- to do : we have two h1 elements on this view : fix & rollout -->
   <h1>Kev Hastie</h1>


   
   <!--
      HERO
   -->
   <section class="cover_block hero_block fade_in subtle_zoom_in can_darken darken_img_3 " style="height:780px;" >
      <img class="bg_img" style="object-fit:cover;object-position:right center;max-width:100%;"
         src="/imgs/all-sorts-of-questions.jpg" 
         alt="to do : alt text" /> 
      <div class="text_overlay "> 
         <!-- to do : flex_cols on mobile -->
         <section class="flex  gap_0">
            <div class="display_1 text_white">Portfolio</div>   
         </section>
      </div>
   </section>  
   </section>
</template>

<style scoped>
section.home_view {
   user-select:none;
}
section.portfolio_home {
   margin:5rem auto;
   padding:2rem 0;
   background:#fcfcfe;
   width:720px;
   max-width:90%;
   padding:1rem;
   border-radius:.5rem;
   /* text-align:center; */
}
div.no_wrap {
   margin:0;padding:0;
   white-space:preserve nowrap;
}

.meta_grid {

   -ms-grid-columns:1fr;
   grid-template-columns:1fr;
   -webkit-box-align:flex-start;
   -ms-flex-align:flex-start;
   align-items:flex-start;
   gap:2rem;

   max-width:600px;
   margin:auto;
   margin-top:5rem;
   padding-bottom:5rem;
}


@media screen and (min-width: 768px) {
   section.view_section {
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
      flex-direction:column;
      gap:2rem;
      padding:1rem 2rem;
   }
   /* improve UI readability on sm */
   p {
      margin-top:2rem;
      margin-bottom:2rem;
   }
}




h1 {
   color:white;
   padding-left:1rem;
}
@media screen and (max-width: 768px) {
   h1 {
      text-align:center;
      padding-top:2rem !important;
   }
}
h3 {
   letter-spacing:12px;
   font-size:2rem;
   font-weight:700;
}
h4 {
   font-size:1.13rem;
   margin:.6rem .25rem .5rem 1.25rem;
   line-height:1.5rem;
   font-weight:400;
   text-align: right;
}
.text_white {
   color:white;
}
@media screen and (max-width: 768px) {
   h1 {
      letter-spacing:1rem;
   }
   h2 {
      font-size:3rem;
      letter-spacing:unset;
   }
   .meta_grid img {
      max-width:80%;
   }
}
ul {
   margin:0;
}

.home_links {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;   
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
}
.github_icon {
   width:36px;
   height:36px;
}
.no_user_select {
   user-select:none;
}

</style>
