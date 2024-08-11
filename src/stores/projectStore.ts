import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import reqInitOptions from '../utilities/requestInit/RequestInit'


// ProjectStore

export const useProjectStore = defineStore('project_store', () => {

   // project markdown string from .md file - we will render using markdown-it
   const project_md = ref('')

   // projects_list
   const projects_list = ref(<any>[])  // to do : as <Project> ?

   // we use current_filter to filter list of 'back' to list from ProjectView
   const current_filter = ref('')

   // getters
   const get_project = computed(() => project_md.value)

   // actions
   function set_project(new_project: string) {
      project_md.value = new_project
   }
   function set_current_filter(filter: string) {
      current_filter.value = filter
   }

   async function load_project(project_slug: string) {
      try {
         await fetch(`/projects/${project_slug}.md`,reqInitOptions())
            .then(response => {
               return response.text()
               })
            .then(text => {
               // we are accessing json static files, so no server-side wrapping around content
               project_md.value = text
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

   async function get_single_project_meta(project_slug: string): Promise<Project> {
      const single_project = projects_list.value.find((project:Project) => {
         return project.slug === <string>project_slug
      })
      return single_project
   }

   // Store Interface
   return { 
      projects_list,
      current_filter,set_current_filter,
      project_md, get_project, set_project,
      load_project, load_projects_list,
      get_single_project_meta
   }
 })

