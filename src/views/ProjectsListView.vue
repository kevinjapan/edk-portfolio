<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onUpdated, toRef, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter.vue'
import ProjectTeaser from '../components/ProjectTeaser/ProjectTeaser.vue'



// ProjectsListView

const projectStore = useProjectStore()

const projects_list = ref(<any>[])  // to do :  <Project> ?

// the current tech filter
const filter = ref(projectStore.current_filter)

// we scroll to this height on changing filter to set filter_nav at top
const filter_nav_height = 140

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
      
      <h1 style="background:white;">Projects</h1>
      <ProjectFilter v-model="filter" class="sticky"/>
      
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
   width:100%;
   min-height:120vh;
   padding-bottom:5rem;
   background:var(--bg_light);
}
.relative {
   position:relative;
}
.fixed {
   position:fixed;
}
.sticky {
   position:sticky;
   top:0;
   background:white;
   border-bottom:solid 1px lightgrey;
   z-index:999999;
}
.top_0 {
   top:0;
}
h1 {
   width:100%;
   text-align:center;
   margin:2rem 0 0 0;
   padding-bottom:1rem;
}
.projects_list_header {
   width:100%;
   background:var(--bg_dark);
}
ul.projects_list_grid {
   list-style:none;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr;
   gap:0rem;
   margin:0;
   padding:0;
   padding-top:2rem;
}
/* to do : check on mobile / ipad views */
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
h1 {
   font-weight:200;
}
h2 {
   font-size:2.5rem;
   font-weight:200;
}
.mt_0 {margin-top:0;}
.mt_3 {margin-top:3rem;}
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
   color:hsl(0, 0%, 70%);
   width:fit-content;
   margin-left:auto;
   margin-right:auto;
   margin-top:25vh;
   padding:1rem;
   border-radius:.25rem;
}
@media screen and (max-width: 768px) {
   .loading {
      font-size:6rem;
   }
}
/* 
   we use v-if to conditionally show li - 
   but we have to account for wrapping v-for always 
   showing the wrapper div for each project - 
   so we use css has() to exclude from UI display
*/
.wrapper {
   display:none;
   width:0;
   height:0;
}
.wrapper:has(li) {
   display:block;
   width:fit-content;width:100%;
   height:fit-content;
}
</style>
