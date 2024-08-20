<script setup lang="ts">
import { ref, computed, onBeforeMount, onMounted, onUpdated, watch } from 'vue'
import { useProjectStore } from '@/stores/projectStore.ts'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter.vue'
import ProjectTeaser from '../components/ProjectTeaser/ProjectTeaser.vue'



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
const filter_nav_top = 125

// our 'loading' flag
const updating = ref(false)

// we flag initial mount, so that we don't scroll if we've just loaded this component
const mounting = ref(true)

onBeforeMount(async() => {
   await projectStore.load_projects_list()
   projects_list.value = projectStore.projects_list
   filtered_projects_list.value = projectStore.projects_list
})

onMounted(() => {
   setTimeout(() => mounting.value = false,100)
})

onUpdated(() => {
   if(mounting.value === false) {
      window.scroll(0,filter_nav_top)
   }
})

// we introduce a delay to give perception of list changing;
// otherwise appearance is unchanging (somes lists have same order)
watch(filter,() => {

   // 'all projects'
   if(filter.value === '' || filter.value.toUpperCase() === 'ALL') {
      filtered_projects_list.value = projects_list.value
      return
   }

   // set current filter
   projectStore.set_current_filter(filter.value)

   // filter display list
   filtered_projects_list.value = projects_list.value.filter((project) => {
      return project.tech.some((tech) => {
         return tech.name.toUpperCase() === filter.value.toUpperCase()
      })
   })

   // perceived 'loading'
   updating.value = true
   setTimeout(() => {updating.value = false},800)
})

const current_filter_label = computed(() => {
   return filter.value === '' ? 'all projects' : filter.value
})

</script>

<template>

   <section class="view_section projects_list relative mt_0">
      
      <h1>Projects</h1>

      <ProjectFilter v-model="filter" :projects_list="projectStore.projects_list" class="sticky"/>      
      
      <!-- we should simply filter the 'projects_list' from projectStore, but we
         wanted to explore the rendering mechanism; ok method for our dataset size -->
      <ul v-if="updating === false" class="projects_list_grid ">
         <div id='list' v-for="project in filtered_projects_list" key="project.slug" class="wrapper">
            <li class="project_teaser">
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
   display:-ms-grid;
   display:grid;
   -ms-grid-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
   gap:0rem;
   max-width:100%;
   margin:0;
   padding:0;
   padding-top:2rem;
}
@media screen and (max-width: 1100px) {
   ul.projects_list_grid {
      -ms-grid-columns: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      gap:1rem;
      margin-left:auto;
      margin-right:auto;
   }
}
@media screen and (max-width: 768px) {
   ul.projects_list_grid {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      width:90%;
   }
   ul.projects_list_grid li {
      width:90%;
      margin:0;
      margin-left:auto;
      margin-right:auto;
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


h1 {
   letter-spacing:1rem;
}

</style>
