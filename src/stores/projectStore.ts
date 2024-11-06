import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import reqInitOptions from '../utilities/requestInit/RequestInit'


// ProjectStore

export const useProjectStore = defineStore('project_store', () => {

   // current project json 
   const current_project = ref<ProjectDetails>()

   // projects_list
   // we tell TypeScript we intend to store Projects in this array
   // we pass a type parameter to the ref function
   const projects_list = ref<Project[]>([])

   // we use current_filter to filter list of 'back' to list from ProjectView
   const current_filter = ref('')

   // getters
   const get_project = computed(() => current_project.value)

   // actions
   // function set_project(new_project: string) {
   //    current_project.value = new_project
   // }
   // function set_current_filter(filter: string) {
   //    current_filter.value = filter
   // }

   async function load_project(project_slug: string) {
      try {
         await fetch(`/projects/${project_slug}.json`,reqInitOptions())
            .then(response => {
               return response.text()
               })
            .then(text => {
               // we are accessing json static files, so no server-side wrapping around content
               current_project.value = JSON.parse(text)
            })
            .catch((error) => {
               throw error
            })
      }
      catch(error) {
         return {
            outcome: 'fail',
            message: error
         }
      }
      return {
         outcome: 'success',
         message: '' // we send no msg so as to not activate notification : 'The project was loaded successfully'
      }
   }

   async function load_projects_list() {
      try {
         await fetch(`/projects/projects-list.json`,
            { 
               method: "GET",
               mode: "cors",
               cache: "default"
            }
         )
            .then(response => {
               return response.json()
               })
            .then(jsonData => {
               // we are accessing json static files, so no server-side wrapping around content
               projects_list.value = jsonData
            })
            .catch((error) => {
               throw error
            })
      }
      catch(error) {
         return {
            outcome: 'fail',
            message: error
         }
      }
      return {
         outcome: 'success',
         message: '' // we send no msg so as to not activate notification : 'The project was loaded successfully'
      }
   }

   async function get_single_project_meta(project_slug: string): Promise<Project | null> {
      const single_project = projects_list.value.find((project:Project) => {
         return project.slug === <string>project_slug
      })
      // note : Array.prototype.find() returns undefined if no element found
      return single_project ? single_project : null
   }

   // Store Interface
   return { 
      projects_list,
      current_filter,
      current_project, get_project,
      load_project, load_projects_list,
      get_single_project_meta
   }
 })


// hot module replacement for pinia
if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot))
}