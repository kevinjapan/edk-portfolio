<script setup lang="ts">
import type { Ref } from 'vue'
// import { computed } from 'vue'
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import { useRoute, useRouter } from 'vue-router'
import markdownit from 'markdown-it'
import BackLink from '../components/BackLink/BackLink.vue'


// ProjectView

// Main content is from markdown file
// We inject some meta data from the Project retrieved from projects_list.json
// We don't include title/desc etc in the template since we rely on the markdown 
// file being a stand-alone document in itself, thus containing those properties.

// issue : if 'not finding module' - try this:
// restart the TS server: type: ctrl + Shift + P 


const route = useRoute()
const router = useRouter()
const projectStore = useProjectStore()


const project: Ref<Project | null> = ref(null)

const notify_msg = ref('')

// handle markdown data
const md = markdownit()
const rawHtml = ref('')

onBeforeMount(async() => {
   window.scroll(0,0)
   const single_project = await projectStore.get_single_project_meta(<string>route.params.project_slug)
   project.value = single_project
})

onMounted(async() => {
   window.scroll(0,0)
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

watchEffect(async() => {

   const result = await projectStore.load_project(<string>route.params.project_slug)
   if(result && result.message) notify_msg.value = <string>result.message 

   const rcvd_markdown = md.render(projectStore.project_md)
   if(rcvd_markdown === '') return

   // check for '!doctype html' in first line - if found, not md file, but some 'not found' or default response in html doc
   const doctype_index = rcvd_markdown.toUpperCase().indexOf('!DOCTYPE HTML')

   if((doctype_index > -1 && doctype_index < 20)) {
      router.replace('/notfound')
   }
   else {
      rawHtml.value = rcvd_markdown
      window.scroll(0,0)
   }
})

// const strip_http_site = computed(() => {
//    return project.value?.site?.replace('https://','')
// })
// const strip_http_github = computed(() => {
//    return project.value?.github?.replace('https://github.com/','')
// })


</script>

<template>

   <section class="view_section relative">
      
      <BackLink route_name="projects_list" label="projects"/>

      <!-- <section class="meta_section">
         <p v-if="project?.title" class="teaser_slot">
            <span class="slot_label">title : </span>
            <span class="meta_section_title">{{ project.title }}</span>
         </p>
         <p v-if="project?.tech" class="teaser_slot">
            <span class="slot_label">tech : </span>            
            <span v-for="tech in project?.tech" class="tech" >
               {{ tech.name }}
            </span>
         </p>
         <p v-if="project?.status" class="teaser_slot">
            <span class="slot_label">status : </span>
            <span>{{ project.status }}</span>
         </p>
      </section> -->

      <!-- <section class="meta_links_section">
         <p v-if="project?.site" class="teaser_slot">
            <span class="slot_label">site : </span>
            <a :href="project.site" target="_blank">{{ strip_http_site }}</a>
         </p>
         <p v-if="project?.github" class="teaser_slot">
            <span class="slot_label">github : </span>
            <a :href="project.github" target="_blank">{{ strip_http_github }}</a>
         </p>
      </section> -->
      <!-- 
            the markdown content block - we style around this block and apply styles within this block
      -->
      <div class="markdown_content" v-html="rawHtml"></div>

      
 
   </section>

   <AppStatus v-model="notify_msg" />
   
</template>


<style scoped>
/*

note : 'scoped' styles don't get applied to the rawHtml we generate from markdown
so we need to pre-set these styles earlier - 

see markdown.css

*/
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