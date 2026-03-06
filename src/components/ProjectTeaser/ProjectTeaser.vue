<script setup lang="ts">
import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.

// we rcv delay int from client/parent/container to allow us to match delays 
// this permits slide_up and fade_in to be combined smoothly

const props = defineProps<{
  project: Project
  delay: string
  filter: string
}>()


// const strip_http_site = computed(() => {
//    return props.project.site?.replace('https://','')
// })

// const strip_http_github = computed(() => {
//    return props.project.github?.replace('https://github.com/','')
// })

const teaser_img_path = computed(() => {
   return `/imgs/${props.project.img}`
})

const click_on_card = () => {
   if(props.project.site) {
      window.open(props.project.site,'_blank');
   }
   else if(props.project.github) {
      window.open(props.project.github,'_blank');
   }
}

const open_new_tab = (url: string) => {
   window.open(url,'_blank');
}

// 
// we disabled 'blur' on images since transition wasn't working - it came on too abrupt
//

</script>


<template>

   <Transition>

      <section class="project_teaser fade_in" :class="'delay_' + delay" @click="click_on_card">


         <!-- CARD IMAGE -->
         <figure class="project_teaser_img">
            <img v-if="props.project.img" 
               :src="teaser_img_path" 
               :alt="props.project.alt"
               class="teaser_card_img no_blur">

            <div v-if="project?.img_acknowledge" class="img_acknowledge">
               <div @click="open_new_tab(project.img_acknowledge_link)" >image: {{ project.img_acknowledge }}</div>
            </div>
         </figure>


         <!-- CARD TEXTS -->
         <section class="project_teaser_texts">

            <section class="teaser_title_tagline">
               <h2 class="teaser_slot teaser_title">
                  <RouterLink class="title_link" v-if="project.file !== ''" :to="{name:'project', params:{project_slug:project.slug}}">
                        {{ props.project.title }}
                  </RouterLink>
                  <div v-else class="no_link_title">{{ props.project.title }}</div>
               </h2>
               <h3 class="teaser_slot teaser_tagline">{{ props.project.tagline }}</h3>
            </section>

            <!-- <div class="teaser_text teaser_slot">
               <p v-for="desc in props.project.desc" class="desc_paragraph">{{ desc }}</p>
            </div> -->
            
            <div class="teaser_slot tech_list">
               <!-- <div class="slot_label">tech&nbsp;:</div> -->
               <div v-for="tech in props.project.tech" class="tech" >
                  {{ tech.name.toUpperCase() !== 'LATEST' ? tech.name : ''}}
               </div>
            </div>

            <!-- Links -->
            <ul class="links_outer_wrap" style="align-items:flex-end;">
               <li class="links_wrap">
                  <a v-if="props.project.github" class="block" :href="props.project.github" target="_blank">GitHub</a>
                  <a v-if="props.project.site" :href="props.project.site" target="_blank" class="block">Visit Site</a>
               </li>
            </ul>

         </section>

      </section>
   </Transition>
   
</template>


<style scoped>
section.project_teaser {

   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;
   gap:.25rem;

   width:100%;
   height:100%;
   height:fit-content;
   margin:0;
   padding-bottom:.9rem;
   background:white;
   cursor:pointer;
   overflow:hidden;
   text-align:left;
   user-select:none;
}

/* tidy and align in mobile */
@media screen and (max-width: 610px) {
   
   section.project_teaser {
      width:80%;
      margin:0 auto;
   }

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
/* tidy and align in mobile */
@media screen and (max-width: 610px) {
   section.project_teaser img {

      max-height:180px !important;
      -o-object-fit:cover;
      object-fit:cover;
      -o-object-position:center left;
      object-position:center left;
   }
}
img.teaser_card_img {
   -o-object-fit:cover;
   object-fit:cover;
   -o-object-position:top left;
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
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   flex-direction:column;
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
   gap:0;
   margin:0;
   padding:.5rem 1rem;
}

section.teaser_title_tagline {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   flex-direction:column;
   gap:0;
   width:100%;
   margin:0;
   padding-top:.15rem;
   padding-bottom:.75rem;
}
section.teaser_title_tagline h2 {
   font-size:2.14rem;
   font-weight:500;
   line-height:2.3rem;
   text-align:center;
   margin-bottom:.275rem;
   
}
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
img {
   display:block;
   width:100%;
   height:180px;
   overflow:hidden;

   margin-bottom:0;
   margin-left:auto;
   margin-right:auto;

   opacity:.5;

   -webkit-filter:blur(5px);
   filter:blur(5px);
    transition: filter 0.5s ease;
}

img.no_blur {
   -webkit-filter:blur(0);
   filter:blur(0);
   opacity:1;
}

div.teaser_slot.tech_list {

   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   -webkit-box-orient:horizontal;
   -webkit-box-direction:normal;
   -ms-flex-direction:row;
   flex-direction:row;
   -ms-flex-wrap:wrap;
   flex-wrap:wrap;

   -webkit-box-pack:flex-start;
   -ms-flex-pack:flex-start;
   justify-content:center;

   -webkit-box-align:left;
   -ms-flex-align:left;
   align-items:left;

   

   gap:.15rem;

   width:100%;
   margin:0;
   margin-bottom:.75rem;
}
div.tech {
   position:relative;
   -webkit-box-align:left;
   -ms-flex-align:left;
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

   div.teaser_slot.tech_list {
      -webkit-box-orient:horizontal;
      -webkit-box-direction:normal;
      -ms-flex-direction:row;
      flex-direction:row;
      -ms-flex-wrap:wrap;
      flex-wrap:wrap;
   }
   
}

.links_outer_wrap {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
   width:100%;
   margin-top:.25rem;
}
.links_wrap {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-pack:end;
   -ms-flex-pack:end;
   justify-content:flex-end;
   -webkit-box-align:center;
   -ms-flex-align:center;
   align-items:center;
   gap:.05rem;
   background:#777;
   width:fit-content;
   margin-top:.5rem;
   padding:.05rem;
}
.links_wrap img {
   margin:0;
   border:none;
}

.links_icon {
   width:24px;
   height:24px;
}
.links_wrap a {
   border-radius:0;
   text-decoration:none;
   font-size:.9rem;
   background:white;
   align-self:flex-end;
   color:blue;
   padding:.15rem .45rem;
}
.links_wrap a:hover {
   background: #323232;
   color:white;
}

</style>