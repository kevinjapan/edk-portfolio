<script setup lang="ts">
import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.
const props = defineProps<{
  project: Project
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


</script>


<template>

   <Transition>

      <section class="project_teaser">


         <!-- CARD IMAGE -->
         <figure>
            <img v-if="props.project.img" 
               :src="teaser_img_path" 
               :alt="props.project.alt"
               class="teaser_card_img unblur">

            <div v-if="project?.img_acknowledge" class="img_acknowledge">
               <a :href="project.img_acknowledge_link" target="_blank">image: {{ project.img_acknowledge }}</a>
            </div>
         </figure>


         <!-- CARD TEXTS -->
         <section class="project_teaser_texts">

            <section class="teaser_title_tagline">
               <h2 class="teaser_slot teaser_title mb_0 mt_0">
                  <RouterLink class="title_link" v-if="project.file !== ''" :to="{name:'project', params:{project_slug:project.slug}}">
                        {{ props.project.title }}
                  </RouterLink>
                  <div v-else class="no_link_title">{{ props.project.title }}</div>
               </h2>
               <h3 class="teaser_slot teaser_tagline">{{ props.project.tagline }}</h3>
            </section>

            <div class="teaser_text teaser_slot">
               <p v-for="desc in props.project.desc" class="desc_paragraph">{{ desc }}</p>
            </div>
            
            <div class="teaser_slot tech_list">
               <!-- <div class="slot_label">tech&nbsp;:</div> -->
               <div v-for="tech in props.project.tech" class="tech" >
                  {{ tech.name.toUpperCase() !== 'LATEST' ? tech.name : ''}}
               </div>
            </div>

            <!-- Links -->
            <ul>
               <li class=" github_wrap">
                  <a v-if="props.project.github" class="block" :href="props.project.github" target="_blank">github</a>
                  <a v-if="props.project.site" :href="props.project.site" target="_blank" class="block">visit site</a>
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
   height:fit-content;
   margin:0;
   padding:.5rem;
   padding-bottom:1rem;
   border:solid 1px hsl(0, 0%, 90%);
   border-radius:.5rem;

   background:white;

   overflow:hidden;
   text-align:left;
   user-select:none;
}
img.teaser_card_img {
   object-fit:cover;
}
section.teaser_slots {
   border:unset;
   box-shadow:unset;
   padding:0;
   padding-left:.5rem;
   padding-right:.5rem;
}

section.project_teaser_texts {
   display:flex;
   flex-direction:column;
   gap:0rem;
   padding:0 .25rem;
}

section.teaser_title_tagline {
   display:flex;
   flex-direction:column;
   gap:.5rem;
}
section.teaser_title_tagline h2 {
   font-size:2.25rem;
   line-height:2.5rem;
   margin-bottom:0;
}
section.teaser_title_tagline h3 {
   font-size:1.25rem;
   font-weight:600;
   line-height:1.5rem;
   margin:0;
}

/* override (limit widths) on main styles */
h2.teaser_title {
   font-size:2rem;
   font-weight:700;
   white-space:normal;
   margin:0;
   padding:0;
}
p {
   /* override page p width limits */
   max-width:100%;
   margin:0;
   padding:0;
   font-size:1.15rem;
   line-height:1.4rem;
}
.teaser_text {
   margin:1rem 0 1.5rem 0;
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
   font-size:.8rem;
   font-style:italic;
   text-align:right;
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
a {
   text-decoration:underline;
}
figure {
   width:100%;
   margin:0 auto;
}
img {
   width:100%;
   height:200px;
   overflow:hidden;

   margin-bottom:0;
   margin-left:auto;
   margin-right:auto;

   -webkit-filter:blur(5px);
   filter:blur(5px);

   opacity:.5;

   border-bottom:solid 1px lightgrey;
   border-radius:.5rem .5rem 0 0;
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
   justify-content:flex-start;

   align-items:left;

   gap:.5rem;

   max-width:80%;
   /* margin:0 auto; */
   margin:0;
   margin-bottom:1rem;

}



.teaser_slot > p.desc_paragraph {
   color:black;
   width:100%;
   margin:0;
   padding:0;
}
div.tech {
   align-items:left;
   width:fit-content;
   color:black;
   background:hsl(60, 100%, 80%);
   padding-left:.5rem;
   padding-right:.5rem;
   font-weight:700;
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
      flex-direction:row;
      flex-wrap:wrap;
   }
   
}


.github_wrap {
   display:flex;
   justify-content:flex-start;
   align-items:center;
   gap:0;
}
.github_wrap img {
   margin:0;
   border:none;
}

.github_icon {
   width:24px;
   height:24px;
}

</style>