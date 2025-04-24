<script setup lang="ts">
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import { useRoute } from 'vue-router'
import ProjectSection from '@/components/ProjectSection/ProjectSection.vue'
import { init_fade_ins } from '@/utilities/intersections/intersections'

// for non-existant projects, we inject NotFound component
import NotFound from '@/components/NotFound/NotFound.vue'


// ProjectView

// we replaced markdown w/ json dataset files. Markdown can't provide the layout styling we want
// we use markdown inside text content of certain Block Types to access some features (eg bold styling)


const route = useRoute()
const projectStore = useProjectStore()
const notify_msg = ref('')

onBeforeMount(async() => {
   await projectStore.load_project(<string>route.params.project_slug)
})

onMounted(async() => {
   
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)

   setTimeout(() => enable_links(),200)
})

// we set all markdown-internal links to open in new tab
const enable_links = () =>{
   const links = document.querySelectorAll('.markdown_content a')
   if(links) {
      links.forEach((link) => {
         link.setAttribute('target', '_blank');
      })
   }
}

watchEffect(() => {
   setTimeout(() => init_fade_ins(),500)
})



let count = 0


</script>

<template>

   <section v-if="projectStore?.current_project?.sections">
      <section class="project_sections" v-for="section in projectStore?.current_project?.sections" :key="count++">
         <ProjectSection :section="section"/>
      </section>
   </section>
   <section v-else style="margin-top:12rem;">
      <NotFound/>
   </section>

   <AppStatus v-model="notify_msg" />
   
</template>


<style scoped>
/*

note : 'scoped' styles don't get applied to the rawHtml we generate from markdown
so we need to pre-set these styles earlier - 

see markdown.css

*/
.project_sections {
   width:100%;
}
.meta_section {
   display:-ms-grid;
   display:grid;

   -ms-grid-columns: 1fr 2fr 1fr;
   grid-template-columns:1fr 2fr 1fr;

   max-width:100%;

   -ms-flex-pack:distribute;
   justify-content:space-around;

   gap:0;
   position:sticky;
   top:30px;
   background:white;
   border-bottom:solid 1px lightgrey;
   padding:0 1rem 0 1rem;
}
.meta_section_title {
   font-weight:600;
}
.meta_section * {
   width:fit-content;
   margin:.5rem;
   margin-top:.75rem;
}
.meta_links_section {
   
   display:-ms-grid;
   display:grid;
   
   -ms-grid-columns: 1fr 1fr;
   grid-template-columns:1fr 1fr;

   max-width:100%;

   -ms-flex-pack:distribute;
   justify-content:space-around;

   gap:0;
   position:sticky;
   top:83px;
   background:white;
   border-bottom:solid 1px lightgrey;

}
p {
   max-width:40rem;
   margin-left:auto;
   margin-right:auto;
}
.tech {
   display:inline;
   background:hsl(60, 100%, 80%);
   padding-left:.25rem;
   padding-right:.25rem;
   margin-right:.25rem;
}
@media screen and (max-width: 768px) {
   section.view_section {
      margin-top:3rem;
   }
}
.slot_label {
   font-style:italic;
   color:grey;
}

</style>