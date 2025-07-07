<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onUpdated, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter.vue'
import ProjectTeaser from '../components/ProjectTeaser/ProjectTeaser.vue'
import init_unblurs from '../utilities/intersections/intersections'


// ProjectsListView

const projectStore = useProjectStore()

// projects_list
// we pass a type parameter to the ref function - we intend to store Projects in this array
const projects_list = ref<Project[]>([])

// filtered display list
const filtered_projects_list = ref<Project[]>([])

// the current tech filter
const filter = ref(projectStore.current_filter)

// we scroll to this height on changing filter to set filter_nav at top
// const filter_nav_top = 125

// our 'loading' flag
const updating = ref(false)

// we flag initial mount, so that we don't scroll if we've just loaded this component
const mounting = ref(true)

onBeforeMount(async() => {

   // get projects_list
   await projectStore.load_projects_list()
   projects_list.value = projectStore.projects_list

   filter_project_list()
})

const filter_project_list = () => {

   if(filter.value === '' || filter.value.toUpperCase() === 'ALL') {
      filtered_projects_list.value = projects_list.value
   }
   else {
      filtered_projects_list.value = projects_list.value.filter((project) => {
         return project.tech.some((tech) => {
            return tech.name.toUpperCase() === filter.value.toUpperCase()
         })
      })
   } 
}

onMounted(() => {
   setTimeout(() => mounting.value = false,100)
   
   // // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),200)
})

onUpdated(() => {
   if(mounting.value === false) {
      // Firefox needs a delay to render page and effect this scroll
      setTimeout(() => window.scroll(0,0),200)
   }
   init_unblurs()
})

// we introduce a delay to give perception of list changing;
// otherwise appearance is unchanging (somes lists have same order)
watch(filter,() => {

   filter_project_list()

   // set current filter
   // projectStore.set_current_filter(filter.value)

   // perceived 'loading'
   updating.value = true
   setTimeout(() => {updating.value = false},1000)
})

const current_filter_label = computed(() => {
   return filter.value === '' ? 'all projects' : filter.value
})

</script>

<template>

   <section class="view_section projects_list relative mt_0">
      
      <h1>Projects</h1>

      <ProjectFilter v-model="filter" :projects_list="projectStore.projects_list" class="sticky filter_nav"/>      
      
      <!-- we should simply filter the 'projects_list' from projectStore, but we
         wanted to explore the rendering mechanism; ok method for our dataset size -->
      <ul v-if="updating === false" class="projects_list_grid ">
         <li class="project_teaser" v-for="project in filtered_projects_list" key="project.slug">
            <ProjectTeaser  :project="project" :filter="filter"/>
         </li>
      </ul>

      <p v-else class="loading">
         <span>{{ current_filter_label }}</span>
      </p>

   </section>
      
</template>


<style scoped>
.filter_nav {
   top:40px;
   left:0;
}
section.projects_list {
   position:relative;
   width:100%;
   min-height:120vh;
   padding-bottom:5rem;
   background:var(--bg_dark);background:#36454f ;
   user-select:none;
}

.projects_list_header {
   width:100%;
   background:var(--bg_dark);background:#36454f ;
}
ul.projects_list_grid {
   list-style:none;
   display:-ms-grid;
   display:grid;
   -ms-grid-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   gap:1rem;
   max-width:100%;
   margin:0;
   padding:2rem 1rem;
}

@media screen and (max-width: 1100px) {
   ul.projects_list_grid {
      -ms-grid-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) ;
      gap:1rem;
      margin-left:auto;
      margin-right:auto;
   }
}
@media screen and (max-width: 910px) {
   ul.projects_list_grid {
   -ms-grid-columns: minmax(0, 1fr) minmax(0, 1fr) ;
   grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap:1rem;
   }
   ul.projects_list_grid li {
      width:90%;
      margin:0;
      margin-left:auto;
      margin-right:auto;
      margin-bottom:1rem;
   }
   section.view_section {
      margin-top:3rem;
   }
}
@media screen and (max-width: 620px) {
   ul.projects_list_grid {
   -ms-grid-columns: minmax(0, 1fr)  ;
   grid-template-columns: minmax(0, 1fr) ;
      gap:1rem;
   }
}
li.project_teaser {
   margin:0; 
}
.teaser_tagline {
   font-size:1.2rem;
}
.teaser_slot {
   margin-top:1rem;
}
.loading {
   white-space: normal;
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


h1 {
   color:white;
   padding-left:1rem;
}
@media screen and (max-width: 768px) {
   h1 {
      text-align:center;
      padding-top:2rem !important;
      padding-bottom:2rem !important;
   }
}


</style>
