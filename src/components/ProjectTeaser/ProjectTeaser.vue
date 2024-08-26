<script setup lang="ts">
import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.
const props = defineProps<{
  project: Project
  filter: string
}>()


const strip_http_site = computed(() => {
   return props.project.site?.replace('https://','')
})

const strip_http_github = computed(() => {
   return props.project.github?.replace('https://github.com/','')
})

const teaser_img_path = computed(() => {
   return `/imgs/${props.project.img}`
})


</script>


<template>

   <Transition>

      <section>

         <img v-if="props.project.img" 
            :src="teaser_img_path" 
            :alt="props.project.alt"
            width="90%"
            class="unblur"
         >
         <!--div v-else class="teaser_slot">&nbsp;</div-->
         <h2 class="teaser_slot mb_0">
            <RouterLink v-if="project.file !== ''" :to="{name:'project', params:{project_slug:project.slug}}">{{ props.project.title }}</RouterLink>
            <span class="no_link_title" v-else>{{ props.project.title }}</span>
         </h2>

         <p class="teaser_slot teaser_tagline">{{ props.project.tagline }}</p>
         
         <div class="teaser_slot mt_1">            
               <span class="slot_label">status&nbsp;:&nbsp;</span>
               <span class="project_status">{{ props.project.status }}</span>
         </div>
         
      
         <!-- break out desc paras -->
         <div class="teaser_slot">
            <p v-for="desc in props.project.desc" class="desc_paragraph">{{ desc }}</p>
         </div>

         <!-- flex align techs -->
         <div class="teaser_slot tech_list">
            <span class="slot_label">tech&nbsp;:</span>
            <div v-for="tech in props.project.tech" class="tech" >
               {{ tech.name }}
            </div>
         </div>

         <!-- links -->
         <ul>
            <li v-if="props.project.site" class="teaser_slot">
               <span class="slot_label">site&nbsp;:</span>
               <a :href="props.project.site" target="_blank">{{ strip_http_site }}</a>
            </li>

            <li v-if="props.project.github" class="teaser_slot">
               <span class="slot_label">github&nbsp;:</span>
               <a :href="props.project.github" target="_blank">{{ strip_http_github }}</a>
            </li>

            <li v-if="project.file !== ''" class="teaser_slot details_link">
               <RouterLink :to="{name:'project', params:{project_slug:project.slug}}">read more..</RouterLink>
            </li>
         </ul>

      </section>
   </Transition>
   
</template>


<style scoped>

section {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;

   gap:.15rem;

   margin:0;
   padding-bottom:2rem;
   /* padding:1rem;
   padding-top:1rem; */
   border:solid 1px hsl(0, 0%, 90%);
   border-radius:1rem;
   -webkit-box-shadow: 1px 2px 3px 1px hsl(0, 0%, 80%);
   box-shadow: 1px 2px 3px 1px hsl(0, 0%, 80%);

   background:white;

   overflow:hidden;
}

/* override (limit widths) on main styles */
h2 {
   font-size:2.5rem;
   width:100%;
}
p {
   width:90%;
}


.no_link_title {
   font-weight:100;
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
h2 a {
   color:black;
   font-weight:300;
}
a:hover {
   background:hsl(0, 0%, 92%);
}
p.teaser_tagline {
   font-size:2rem;
   font-weight:300;
   margin:0 auto 0 auto;
}
.project_status {
   display:inline;
   background:hsl(60, 100%, 80%);
   padding-left:.25rem;
   padding-right:.25rem;
}
img {
   width:100%;

   margin-bottom:.5rem;
   margin-left:auto;
   margin-right:auto;

   -webkit-filter:blur(3px);
   filter:blur(3px);
}

img.no_blur {

   -webkit-filter:blur(0);
   filter:blur(0);

   -webkit-transition: .3s -webkit-filter ease-in-out;
   -moz-transition: .3s -moz-filter ease-in-out;
   -o-transition: .3s -o-filter ease-in-out;
   transition: .3s filter ease-in-out;
}


div.teaser_slot.tech_list {

   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   gap:.25rem;

   -webkit-box-pack:flex-start;
   -ms-flex-pack:flex-start;
   justify-content:flex-start;

   -webkit-box-align:center;
   -ms-flex-align:center;
   align-items:center;

   margin-top:1.5rem;
   margin-bottom:.5rem;
   margin-left:auto;
   margin-right:auto;
}
@media screen and (max-width: 768px) {
   div.teaser_slot.tech_list {
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
      -ms-flex-direction:column;
      flex-direction:column;
   }
}
.teaser_slot > p.desc_paragraph {
   width:100%;
   margin:0 auto 0 auto;
   padding:0;
}
div.tech {
   display:inline;
   background:hsl(60, 100%, 70%);
   padding-left:.25rem;
   padding-right:.25rem;
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
.mt_1 {
   margin-top:1rem;
}
.mb_0 {
   margin-bottom:0;
}
.mb_1 {
   margin-bottom:1rem;
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
</style>