<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onUpdated, toRef, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter.vue'
import ProjectTeaser from '../components/ProjectTeaser/ProjectTeaser.vue'



// ProjectsListView

const projectStore = useProjectStore()

// projects_list
// we tell TypeScript we intend to store Projects in this array
// we pass a type parameter to the ref function
const projects_list = ref<Project[]>([])

// the current tech filter
const filter = ref(projectStore.current_filter)

// we scroll to this height on changing filter to set filter_nav at top
const filter_nav_height = 110

// our 'loading' flag
const updating = ref(false)

// we flag initial mount, so that we don't scroll if we've just loaded this component
const mounting = ref(true)


onBeforeMount(async() => {
   await projectStore.load_projects_list()
   projects_list.value = projectStore.projects_list
})

onMounted(() => {
   setTimeout(() => mounting.value = false,100)
})

onUpdated(() => {
   if(mounting.value === false) {
      window.scroll(0,filter_nav_height)
   }
})


// we introduce a delay to give perception of list changing;
// otherwise appearance is unchanging (somes lists have same order)
watch(filter,() => {

   // set current filter
   projectStore.set_current_filter(filter.value)

   // perceived 'loading'
   updating.value = true
   setTimeout(() => {updating.value = false},800)
})


const matches_filter = (project: Project) => {

   // we don't filter a ProjectTeaser if filter is empty or 'all'
   if(filter.value === '' || filter.value === 'all') return true

   const tech_list = toRef(project).value.tech
   return tech_list.some((tech) => {
      return tech.name.toUpperCase() === filter.value.toUpperCase()
   })
}

const current_filter_label = computed(() => {
   return filter.value === '' ? 'all projects' : filter.value
})

</script>

<template>

   <section class="view_section projects_list relative mt_0">
      
      <h1>Projects</h1>

      <ProjectFilter v-model="filter" class="sticky"/>      
      
      <!-- we should simply filter the 'projects_list' from projectStore, but we
         wanted to explore the rendering mechanism; ok method for our dataset size -->
      <ul v-if="updating === false" class="projects_list_grid ">
         <div id='list' v-for="project in projects_list" key="project.slug" class="wrapper">
            <li class="project_teaser" v-if="matches_filter(project)">
               <ProjectTeaser  :project="project" :filter="filter"/>
            </li>
         </div>
      </ul>

      <p v-else class="loading">
         <span>{{ current_filter_label }}</span>
      </p>

   </section>
      
</template>

<style scoped>

section.projects_list {
   position:relative;
   width:100%;
   min-height:120vh;
   padding-bottom:5rem;
   background:var(--bg_light);
}
h1 {
   background:white;
}
.projects_list_header {
   width:100%;
   background:var(--bg_dark);
}
ul.projects_list_grid {
   list-style:none;
   display:grid;
   grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   gap:0rem;
   max-width:100%;
   margin:0;
   padding:0;
   padding-top:2rem;
}

@media screen and (max-width: 1100px) {
   ul.projects_list_grid {
      grid-template-columns: 1fr 1fr;
   }
}
@media screen and (max-width: 768px) {
   ul.projects_list_grid {
      grid-template-columns: 1fr;
   }
   section.view_section {
      margin-top:3rem;
   }
}
li.project_teaser {
   margin:1rem;
}
.teaser_tagline {
   font-size:1.2rem;
}
.teaser_slot {
   margin-top:1rem;
}
.loading {
   white-space: nowrap;
   font-size:9rem;
   font-weight:200;
   color:hsl(0, 0%, 75%);
   width:fit-content;
   margin-left:auto;
   margin-right:auto;
   margin-top:25vh;
   padding:1rem;
   border-radius:.25rem;
}
@media screen and (max-width: 768px) {
   .loading {
      font-size:4rem;
   }
}

/* 
   we use v-if to conditionally show li - 
   but we have to account for wrapping v-for always 
   showing the wrapper div for each project - 
   so we use css has() to exclude from UI display

   future : we should simply filter the 'projects_list' from 
   projectStore and display the local filtered_list - but we
   wanted to explore the rendering mechanism; this method is 
   good enough given our projects lists will never be large.
*/
.wrapper {
   display:none;
   width:0;
   height:0;
   margin:0;
   padding:0;
}
.wrapper:has(li) {
   display:block;
   width:fit-content;width:100%;
   height:fit-content;
}
</style>
