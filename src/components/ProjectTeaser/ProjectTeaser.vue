<script setup lang="ts">
import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.
const props = defineProps<{
  project: Project
  filter: string
}>()

// future : disabled - see template
// const desc = computed(() => {
//    return props.project.desc
// })

const strip_http_site = computed(() => {
   return props.project.site?.replace('https://','')
})
const strip_http_github = computed(() => {
   return props.project.github?.replace('https://github.com/','')
})
const teaser_img_path = computed(() => {
   return `../../src/assets/imgs/${props.project.img}`
})

</script>


<template>
   <Transition><section>      
      <h2 class="teaser_slot">
         <RouterLink v-if="project.file !== ''" :to="{name:'project', params:{project_slug:project.slug}}">{{ props.project.title }}</RouterLink>
         <span class="no_link_title" v-else>{{ props.project.title }}</span>
      </h2>
      <p class="teaser_slot teaser_tagline">{{ props.project.tagline }}</p>

      <img v-if="props.project.img" :src="teaser_img_path" width="90%">
      
      <!-- break out desc paras -->
      <!-- we want to reduce footprint for UX - so remove desc in teaser -->
      <!-- <p v-for="desc in props.project.desc" class="teaser_slot">{{ desc }}</p> -->

      <!-- flex align techs -->
      <div class="teaser_slot tech_list">
         <span class="slot_label">tech :</span>
         <div v-for="tech in props.project.tech" class="tech" >
            {{ tech.name }}
         </div>
      </div>

      <p v-if="props.project.site" class="teaser_slot">
         <span class="slot_label">site :</span>
         <a :href="props.project.site" target="_blank">{{ strip_http_site }}</a>
      </p>

      <p v-if="props.project.github" class="teaser_slot">
         <span class="slot_label">github :</span>
         <a :href="props.project.github" target="_blank">{{ strip_http_github }}</a>
      </p>

      <p v-if="project.file !== ''" class="teaser_slot details_link">
         <RouterLink :to="{name:'project', params:{project_slug:project.slug}}">details</RouterLink>
      </p>
   </section></Transition>
   
</template>



<style scoped>
* { margin:0;}

section {
   display:flex;
   flex-direction:column;
   gap:.15rem;
   margin:0;
   padding:1rem;
   padding-top:1rem;
   border:solid 1px hsl(0, 0%, 90%);
   border-radius:1rem;
   box-shadow: 1px 2px 3px 1px hsl(0, 0%, 90%);
   background:white;
}
h2 {
   font-size:2.5rem;
   /* border:solid 1px orange; */
}
.no_link_title {
   font-weight:100;
}
a {
   font-weight:300;
   color:black;
   cursor:pointer;
   padding:.25rem;
   padding-left:.5rem;
   padding-right:.5rem;
   border-radius:.25rem;
}
a:hover {
   background:hsl(0, 0%, 92%);
}
p.teaser_tagline {
   font-size:2rem;
   font-weight:300;
}
img {
   margin-top:1rem;
   margin-bottom:.5rem;
   margin-left:auto;
   margin-right:auto;
   border:solid 1px lightgrey;
   border-radius:.25rem;
}
div.teaser_slot.tech_list {
   display:flex;
   gap:.25rem;
   justify-content:start;
   align-items:center;
   margin-top:.5rem;
   margin-bottom:.5rem;
   margin-left:auto;
   margin-right:auto;
}
div.tech {
   display:inline;
   background:hsl(60, 100%, 80%);
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

/* vue transition config */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  /* we hide immediately since we have non-shown list elements */
  transition: opacity 0s ease;
}
</style>