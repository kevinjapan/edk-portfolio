<script setup lang="ts">
import { onBeforeMount, onUpdated, watchEffect } from 'vue'
import { init_fade_ins, init_slide_ins } from '@/utilities/intersections/intersections'


onBeforeMount(async() => {
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})

onUpdated(() => {
   setTimeout(() => {
      init_slide_ins()
      init_fade_ins()
   },200)
})

watchEffect(() => {
   setTimeout(() => {
      init_slide_ins()
      init_fade_ins()
   },200)
})

</script>

<template>

   <section class="home_view">
   
      <!--
         HERO
      -->
      <section 
         class="cover_block hero_block fade_in  can_darken darken_img_3 ml_3_lg mr_n3_lg" 
         style="height:780px;" >
            
            <img class="bg_img" style="object-fit:cover;object-position:right center;max-width:100%;"
               src="/imgs/all-sorts-of-questions.jpg" 
               alt="image of blue sky and starling sitting atop a corrugated shed" /> 
            
            <div class="text_overlay  slide_in_left"> 
               <section class="flex flex_cols gap_0 pl_2_lg">
                  <h1 class="bg_dark" style="border:solid 3px white;margin:0;padding:0 .5rem;">Kev Hastie</h1>
                  <div class="display_1 text_white" style="border:solid 3px white;margin:0;padding:0 .5rem;">Portfolio</div>   
               </section>
            </div>

      </section>  
   </section>
</template>

<style scoped>

section.cover_block {
   
   /* compensate for ml_3_lg design alignment */
   width:calc(100% - 3rem);

   overflow:hidden;
}
@media screen and (max-width: 1045px) {
   section.cover_block {
      /* reset on compensate for ml_3_lg design alignment */
      width:100%;
   }
}

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
   font-weight:500 !important;
   color:white;
   padding-left:1rem;
}
@media screen and (max-width: 768px) {
   h1 {
      font-size: 2.25em;
      line-height:3.75rem;
      font-weight:300;
      letter-spacing:.21rem;
   }
   .display_1 {
      font-size:5rem;
      line-height:5.5rem;
      font-weight:700;
      width:100%;
      margin:2rem 0 0 0;
      padding-bottom:1rem;
      text-align:center;
      letter-spacing:.21rem;
   }
   div.text_overlay {
      margin:0 auto;
   }
}
@media screen and (max-width: 610px) {
   h1 {
      font-size: 2em;
      line-height:3.25rem;
   }
   .display_1 {
      font-size:3.75rem;
      line-height:4.5rem;
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
