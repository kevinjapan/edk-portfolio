<script setup lang="ts">
import { onBeforeMount, onUpdated, onMounted, watch, watchEffect, ref } from 'vue'
import { init_fade_ins, reset_slide_ups } from '@/utilities/intersections/intersections'
import { useResumeStore } from '@/stores/resumeStore.ts'
import ResumeAspectFilter from '../components/ResumeAspectFilter/ResumeAspectFilter.vue'
import ResumeItemTeaser from '@/components/ResumeItemTeaser/ResumeItemTeaser.vue'
import { init_slide_ups } from '../utilities/intersections/intersections'



const resumeStore = useResumeStore()

// resume_items_list
// we pass a type parameter to the ref function - we intend to store Projects in this array
const resume_items_list = ref<ResumeItem[]>([])

// filtered display list
const filtered_resume_items_list = ref<ResumeItem[]>([])

// the current tech filter
const filter = ref(resumeStore.current_filter)

// our 'loading' flag
const updating = ref(false)


// we flag initial mount, so that we don't scroll if we've just loaded this component
const mounting = ref(true)

onBeforeMount(async() => {
   
   // get projects_list
   await resumeStore.load_resume_items_list()
   resume_items_list.value = resumeStore.resume_items_list

   filter_resume_items_list()

   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})

const filter_resume_items_list = () => {

   if(filter.value === '' || filter.value.toUpperCase() === 'ALL') {
      filtered_resume_items_list.value = resume_items_list.value
   }
   else {
      filtered_resume_items_list.value = resume_items_list.value.filter((item) => {
         return item.aspect.some((aspect) => {
            return aspect.name.toUpperCase() === filter.value.toUpperCase()
         })
      })
   } 
}

watchEffect(() => {
   setTimeout(() => init_fade_ins(),100)
})

// we introduce a delay to give perception of list changing;
// otherwise appearance is unchanging (somes lists have same order)
watch(filter,() => {

   filter_resume_items_list()

   // set current filter
   // projectStore.set_current_filter(filter.value)

   // perceived 'loading'
   updating.value = true
   setTimeout(() => {updating.value = false},100)
})


onMounted(() => {
   setTimeout(() => mounting.value = false,100)
   
   // // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),200)

   init_slide_ups()
})

onUpdated(() => {
   if(mounting.value === false) {
      // Firefox needs a delay to render page and effect this scroll
      setTimeout(() => window.scroll(0,0),200)
   }
   
   reset_slide_ups()
   init_slide_ups()
})

</script>

<template>

   <section class="view_section resume_items_list_view relative pt_3 px_5_lg">

      <h1>Resume</h1>

      <ResumeAspectFilter 
         v-model="filter" 
         :resume_items_list="resumeStore.resume_items_list" 
         class="sticky filter_nav"
      />   

      <section  v-if="updating === false">
            
         <section v-if="filter !== ''" class="slide_up px_5 px_3_lg">
            <h3>{{  filter }}</h3>
            <ul class="resume_items_list gap_1">
               <li class="resume_item " v-for="resume_item in filtered_resume_items_list" key="resume_item">
                  <ResumeItemTeaser  :resume_item="resume_item" :filter="filter"/>
               </li>
            </ul>
         </section>

         <section v-else>
            <!-- workaround : static display for 'All' -->
            <section class="px_5 px_3_lg">
               <section class="slide_up delay_1">
                  <h3>Languages</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">JavaScript</li>
                     <li class="wee_feature_block">TypeScript</li>
                     <li class="wee_feature_block">PHP</li>
                     <li class="wee_feature_block">HTML</li>
                     <li class="wee_feature_block">CSS</li>
                  </ul>
               </section>

               <section class="slide_up delay_2">
                  <h3>Frameworks</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">Vue</li>
                     <li class="wee_feature_block">React</li>
                     <li class="wee_feature_block">Electron</li>
                     <li class="wee_feature_block">Tailwind</li>
                  </ul>
               </section>

               <section class="slide_up delay_3">
                  <h3>Web Design</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">Figma</li>
                     <li class="wee_feature_block">WordPress</li>
                     <li class="wee_feature_block">SquareSpace</li>
                  </ul>
               </section>

               <section class="slide_up delay_4">
                  <h3>Database</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">MySQL</li>
                     <li class="wee_feature_block">SQLite</li>
                  </ul>
               </section>

               <section class="slide_up delay_5">
                  <h3>Experience</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">Web Developer</li>
                     <li class="wee_feature_block">Senior Software Engineer</li>
                     <li class="wee_feature_block">Technical Lead</li>
                     <li class="wee_feature_block">Assistant Language Teacher</li>
                  </ul>
               </section>
         
               <section class="slide_up delay_6">
                  <h3>Education</h3>
                  <ul class="resume_items_list wee_feature_blocks_list flex">
                     <li class="wee_feature_block">BSc Zoology</li>
                     <li class="wee_feature_block">PGDip Software Engineering</li>
                  </ul>
               </section>

            </section>
         </section>
      </section>
   </section>
</template>

<style scoped>
.filter_nav {
   top:40px;
   left:0;
}
section.resume_items_list_view {
   position:relative;
   width:100%;
   min-height:100vh;
   padding-bottom:5rem;
   background:var(--bg_dark);
   user-select:none;
}
ul.resume_items_list {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   gap:0;

   width:100%;
   list-style:none;
   margin:0;margin-left:1.5rem;
   padding:0;
   background:var(--bg_dark);
}
/* tidy and align in mobile */
@media screen and (max-width: 910px) {

   ul.resume_items_list {
      flex-direction:column;
      gap:.25rem !important;
   }

}


ul.wee_feature_blocks_list {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   width:fit-content;
   list-style:none;
   margin:0;margin-left:1.5rem;
   padding:0;
}
li.resume_item,
li.wee_feature_block {
   -webkit-box-flex:1;
   -ms-flex-positive:1;
   flex-grow:1;
   color:white;
   padding:.25rem 1rem;
   border:solid 1px hsl(0, 0%, 85%);
   max-width:fit-content;
}
section.home_view {
   user-select:none;
}
section.portfolio_home {
   margin:5rem auto;
   padding:2rem 0;
   background:#fcfcfe;
   width:720px;
   max-width:90%;
   padding:1rem;
   border-radius:.5rem;
}
.meta_grid {
   -ms-grid-columns:1fr;
   grid-template-columns:1fr;
   -webkit-box-align:flex-start;
   -ms-flex-align:flex-start;
   align-items:flex-start;
   gap:2rem;

   max-width:600px;
   margin:auto;
   margin-top:5rem;
   padding-bottom:5rem;
}
   section.view_section {
      gap:0 !important;
   }


@media screen and (min-width: 768px) {

   section.view_section {
      display:-webkit-box;
      display:-ms-flexbox;
      display:flex;
      -webkit-box-orient:vertical;
      -webkit-box-direction:normal;
      flex-direction:column;
      gap:2rem;
      padding:1rem 2rem;
   }
   /* improve UI readability on sm */
   p {
      margin-top:2rem;
      margin-bottom:2rem;
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
   }
}
h3 {
   letter-spacing:12px;
   font-size:1.6rem;
   font-weight:600;
   color:white;
   margin:0;
   padding:1.85rem 0 .5rem;
}
h4 {
   font-size:1.13rem;
   margin:1.5rem 0 .5rem 1.25rem;
   line-height:1rem;
   font-weight:400;
}
@media screen and (max-width: 768px) {
 
   h2 {
      font-size:3rem;
      letter-spacing:unset;
   }
   .meta_grid img {
      max-width:80%;
   }
}
ul {
   margin:0;
}

.home_links {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;   
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
}
.github_icon {
   width:36px;
   height:36px;
}
.no_user_select {
   user-select:none;
}



</style>
