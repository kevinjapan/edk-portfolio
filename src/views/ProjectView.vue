<script setup lang="ts">
import type { Ref } from 'vue'
import { onBeforeMount, onMounted, ref, watchEffect } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import { useRoute, useRouter } from 'vue-router'
import markdownit from 'markdown-it'


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
})

watchEffect(async() => {
   
   // to do : review - workaround - casting(?) known strings to strings - not sure why they were returning string[] - could just handle that?
   const result = await projectStore.load_project(<string>route.params.project_slug)
   if(result && result.message) notify_msg.value = <string>result.message 

   const rcvd_markdown = md.render(projectStore.project_md)
   if(rcvd_markdown === '') return

   // check for '!doctype html' in first line - if found, not md file, but some 'not found' or default response in html doc
   const doctype_index = rcvd_markdown.indexOf('!doctype html')

   if((doctype_index > -1 && doctype_index < 20)) {
      router.replace('/notfound')
   }
   rawHtml.value = rcvd_markdown
})

</script>

<template>
   <section class="view_section">
      
      <div style="margin-top:5rem;">
         <RouterLink 
            :to="{name:'projects_list', params:{}}" 
            class="view_link" activeClass="selected_view" exactActiveClass="selected_view">
            back to {{ route.params.tech }} projects
         </RouterLink>
      </div>

      <div class="markdown_content" v-html="rawHtml"></div>
      
      <p v-if="project?.status" class="teaser_slot">
         <span class="slot_label">status : </span>
         <span>{{ project.status }}</span>
      </p>

      <!-- future : transition not working here : cf ProjectsListView -->
      <Transition>
         <p v-if="project?.site" class="teaser_slot">
            <span class="slot_label">site : </span>
            <a :href="project.site" target="_blank">{{  project.site }}</a>
         </p>
      </Transition>

      <p v-if="project?.github" class="teaser_slot">
         <span class="slot_label">github : </span>
         <a :href="project.github" target="_blank">{{ project.github }}</a>
      </p>

   </section>
   <AppStatus v-model="notify_msg" />
   
</template>


<style scoped>
/*
note : 'scoped' styles don't get applied to the rawHtml we generate from markdown
so we need to pre-set these styles earlier - see markdown.css
*/


p {
   max-width:40rem;
   margin-left:auto;
   margin-right:auto;
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

/* vue transition config */
.v-enter-active,
.v-leave-active {
  transition: opacity 1.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transition: opacity 1.5s ease;
}
</style>