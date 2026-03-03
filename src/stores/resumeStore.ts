import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
// import reqInitOptions from '../utilities/requestInit/RequestInit'


// ProjectStore

export const useResumeStore = defineStore('resume_store', () => {

   // current project json 
   const current_resume_item = ref<ResumeItemDetails>()

   // resume_items_list
   // we tell TypeScript we intend to store Projects in this array
   // we pass a type parameter to the ref function
   const resume_items_list = ref<ResumeItem[]>([])

   // we use current_filter to filter list of 'back' to list from ProjectView
   const current_filter = ref('')

   // getters
   const 
   get_resume_item = computed(() => current_resume_item.value)

 
   // async function load_resume_item(resume_item_slug: string) {
   //    try {
   //       await fetch(`/resume/${resume_item_slug}.json`,reqInitOptions())
   //          .then(response => {
   //             return response.text()
   //             })
   //          .then(text => {
   //             // we are accessing json static files, so no server-side wrapping around content
   //             current_resume_item.value = JSON.parse(text)
   //          })
   //          .catch((error) => {
   //             throw error
   //          })
   //    }
   //    catch(error) {
   //       return {
   //          outcome: 'fail',
   //          message: error
   //       }
   //    }
   //    return {
   //       outcome: 'success',
   //       message: '' // we send no msg so as to not activate notification : 'The project was loaded successfully'
   //    }
   // }

   async function load_resume_items_list() {
      try {
         await fetch(`/resume/resume-items-list.json`,
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
               resume_items_list.value = jsonData
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



   // Store Interface
   return { 
      current_resume_item,
      resume_items_list,
      current_filter, 
      get_resume_item,
      // load_resume_item, 
      load_resume_items_list
   }
 })


// hot module replacement for pinia
if (import.meta.hot) {
   import.meta.hot.accept(acceptHMRUpdate(useResumeStore, import.meta.hot))
}