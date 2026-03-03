<script setup lang="ts">
// import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.
const props = defineProps<{
  resume_item: ResumeItem
  filter: string
}>()





</script>


<template>

   <Transition>

      <!-- <section class="resume_item_teaser"> -->


         <!-- to do : tidy this file - remove depr copied from ProjectTeaser : -->
         <!-- CARD IMAGE -->
         <!-- <figure class="project_teaser_img">
            <img v-if="props.project.img" 
               :src="teaser_img_path" 
               :alt="props.project.alt"
               class="teaser_card_img unblur">

            <div v-if="project?.img_acknowledge" class="img_acknowledge">
               <div @click="open_new_tab(project.img_acknowledge_link)" >image: {{ project.img_acknowledge }}</div>
            </div>
         </figure> -->


         <!-- CARD TEXTS -->
         <!-- <!-- <section class="project_teaser_texts"> -->

               <!-- <h2 class="teaser_slot teaser_title"> -->
                  <!-- <RouterLink class="title_link" v-if="project.file !== ''" :to="{name:'project', params:{project_slug:project.slug}}"> -->
                        {{ props.resume_item.title }}
                  <!-- </RouterLink> -->
               <!-- </h2> -->
           

            <!-- <div class="teaser_text teaser_slot">
               <p v-for="desc in props.project.desc" class="desc_paragraph">{{ desc }}</p>
            </div> -->
            
            <!-- <div class="teaser_slot tech_list">
               <div v-for="aspect in props.resume_item.aspect" class="aspect" >
                  {{ aspect.name.toUpperCase() !== 'LATEST' ? aspect.name : ''}}
               </div>
            </div> -->

            <!-- Links -->
             <!-- to do : rename! -->
            <!-- <ul class="github_outer_wrap" style="align-items:flex-end;">
               <li class="github_wrap">
                  <a v-if="props.project.github" class="block" :href="props.project.github" target="_blank">GitHub</a>
                  <a v-if="props.project.site" :href="props.project.site" target="_blank" class="block">Visit Site</a>
               </li>
            </ul> -->

         <!-- </section> -->

      <!-- </section> -->
   </Transition>
   
</template>


<style scoped>

section.resume_item_teaser {



   width:fit-content;
   height:100%;
   height:fit-content;
   margin:0;
   /* padding:.5rem; */
   padding-bottom:.8rem;
   /* border:solid 1px hsl(0, 0%, 90%); */
   /* border-radius:.5rem; */

   background:white;

   cursor:pointer;
   overflow:hidden;
   text-align:left;
   user-select:none;
   
}

section.project_teaser img {
   scale:1;
   -webkit-transition: scale 1s;
   -o-transition: scale 1s;
   transition: scale 1s;
}
section.project_teaser:hover img {
   scale:1.2;
   -webkit-transition: scale 0.5s;
   -o-transition: scale 0.5s;
   transition: scale 0.5s;
}
img.teaser_card_img {
   object-fit:cover;
   object-position:top left;
}
section.teaser_slots {
   border:unset;
   box-shadow:unset;
   padding:0;
   padding-left:.5rem;
   padding-right:.5rem;
}

section.project_teaser_texts {
   /* to do : webkit : rollout */
   display:flex;
   flex-direction:column;
   justify-content:center;
   gap:0;
   margin:0;
   padding:.5rem 1rem;
}

section.teaser_title_tagline {
   color:white;
   width:fit-content !important;
   margin:0;padding:0;
}
section.teaser_title_tagline h2 {
   font-size:2.14rem;
   font-weight:500;
   line-height:2.3rem;
   text-align:center;
   margin-bottom:.275rem;
   color:white;
}
/* section.teaser_title_tagline {
   flex-grow:1;
   color:white;
   padding:.25rem 1rem;
   border:solid 1px hsl(0, 0%, 85%);
} */
section.teaser_title_tagline h3 {
   font-size:1.3rem;
   font-weight:300;
   line-height:1.4rem;
   margin:0;
   text-align:center;
   color:hsl(0, 0%, 25%);
}

/* override (limit widths) on main styles */
h2.teaser_title {
   font-size:2rem;
   line-height:2.1rem;
   font-weight:700;
   white-space:normal;
   margin:0;
   padding:0;
}
p {
   /* override page p width limits */
   max-width:100%;
   margin:0;
   padding:0;padding-bottom:1rem !important;
   font-size:1rem;
   line-height:1.15rem;
   text-align:center;
   color:hsl(0, 0%, 30%);
}
.teaser_text {
   margin:.75rem 0 0 0;
}

a {
   font-weight:400;
   color:hsl(241, 91%, 65%);
   cursor:pointer;
   padding:.25rem;
   padding-left:.5rem;
   padding-right:.5rem;
   border-radius:.25rem;
}
h2, h2 a {
   color:var(--bg_dark);
   font-weight:900;
}
a:hover {
   background:hsl(0, 0%, 92%);
}
.title_link {
   padding:0;
   white-space:pre-wrap;
}

h2 > div.no_title_link {
   background:yellow;
}

.img_acknowledge {
   position:absolute;
   padding:.15rem .25rem;
   bottom:15px;right:5px;
   /* background:white; */
   font-size:.8rem;
   font-style:italic;
   text-align:right;
}
.img_acknowledge  {
   color:white;
}
.img_acknowledge:hover {
   color:blue;
   background:white;
}


div.teaser_tagline {
   font-size:1.25rem;
   font-weight:400;
   color:black;
}
.project_status {
   display:inline;
   color:black;
   background:hsl(60, 100%, 80%);
   padding-left:.25rem;
   padding-right:.25rem;
}
div.visit_site_cta {
   width:fit-content;
   margin:1rem 0;

}

figure.project_teaser_img {
   position:relative;
   width:100%;
   margin:0 auto;
   overflow:hidden;
}
/* to do : remove all depr : rollout */
img {
   display:block;
   width:100%;
   height:180px;
   overflow:hidden;

   margin-bottom:0;
   margin-left:auto;
   margin-right:auto;

   -webkit-filter:blur(5px);
   filter:blur(5px);

   opacity:.5;
   

}

img.no_blur {

   -webkit-filter:blur(0);
   filter:blur(0);
   opacity:1;

   -webkit-transition: .3s -webkit-filter ease-in-out;
   -moz-transition: .3s -moz-filter ease-in-out;
   -o-transition: .3s -o-filter ease-in-out;
   transition: .3s filter ease-in-out;
}

div.teaser_slot.tech_list {

   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;

   -webkit-box-pack:flex-start;
   -ms-flex-pack:flex-start;
   justify-content:center;

   align-items:left;

   gap:.15rem;

   width:100%;
   margin:0;
   margin-bottom:.75rem;
}
div.tech {
   position:relative;
   align-items:left;
   width:fit-content;
   color:black;
   padding-left:.15rem;
   padding-right:.15rem;
   font-size:.82rem;
   font-weight:400;
}
div.tech:not(:last-child)::after {
   content:',';
   position:absolute;
   right:-1px;
}

.teaser_slot > p.desc_paragraph {
   color:black;
   width:100%;
   margin:0;
   padding:0;
}

.slot_label {
   font-style:italic;
   color:grey;
}
.details_link {
   margin-top:1.5rem;
}

ul {
   list-style:none;
   margin:0;
   padding:0;
}
li {
   padding-top:.25rem;
}

/* vue transition config */
.v-enter-active,
.v-leave-active {
   -webkit-transition: opacity 0.5s ease;
   -o-transition: opacity 0.5s ease;
   transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
   opacity: 0;
   /* we hide immediately since we have non-shown list elements */
   -webkit-transition: opacity 0s ease;
   -o-transition: opacity 0s ease;
   transition: opacity 0s ease;
}

@media screen and (min-width: 768px) {

   /* to do : list items are not centered in mobile */
   div.teaser_slot.tech_list {
      flex-direction:row;
      flex-wrap:wrap;
   }
   
}

.github_outer_wrap {
   /* to do : webkit : rollout */
   display:flex;
   justify-content:center;
   width:100%;
   margin-top:.25rem;
}
.github_wrap {
   /* to do : webkit : rollout */
   display:flex;
   justify-content:flex-end;
   align-items:center;
   gap:.05rem;
   background:#777;
   width:fit-content;
   margin-top:.5rem;
   padding:.05rem;
}
.github_wrap img {
   margin:0;
   border:none;
}

.github_icon {
   width:24px;
   height:24px;
}
.github_wrap a {
   border-radius:0;
   text-decoration:none;
   font-size:.9rem;
   background:white;
   align-self:flex-end;
   color:blue;
   padding:.15rem .45rem;
}
.github_wrap a:hover {
   background: #323232;
   color:white;
}

</style>