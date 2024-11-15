<script setup lang="ts">

// we use Component v-model to implement two-way binding
const filter = defineModel()


const props = defineProps<{
   projects_list: Project[]
}>()

const set_filter = (filter_value: string) => {
   filter.value = filter_value
}

const num_with_filter = (filter: string) : number => {

   const filter_uc = filter.toUpperCase()

   if(filter_uc === 'ALL' || filter === '') return props.projects_list.length

   const relevant_projects = props.projects_list.filter((project) => {
      return project.tech.some((tech) => {
         return tech.name.toUpperCase() === filter_uc
      })
      // if(has_tech) return project
   })
   return relevant_projects.length
}

</script>


<template>
   <ul class="flex flex_wrap skill_tag_list  pt_0.5">
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('')" :class="{selected_filter: filter === ''}">
            All ({{ num_with_filter('all') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('latest')" :class="{selected_filter: filter === 'latest'}">
            Latest ({{ num_with_filter('latest') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('javascript')" :class="{selected_filter: filter === 'javascript'}">
            JavaScript ({{ num_with_filter('javascript') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('vue.js')" :class="{selected_filter: filter === 'vue.js'}">
            Vue.js ({{ num_with_filter('vue.js') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('react.js')" :class="{selected_filter: filter === 'react.js'}">
            React.js ({{ num_with_filter('react.js') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('typescript')" :class="{selected_filter: filter === 'typescript'}">
            TypeScript({{ num_with_filter('typescript') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('php')" :class="{selected_filter: filter === 'php'}">
            PHP ({{ num_with_filter('php') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('css')" :class="{selected_filter: filter === 'css'}">
            CSS ({{ num_with_filter('css') }})</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('wordpress')" :class="{selected_filter: filter === 'wordpress'}">
            WordPress ({{ num_with_filter('wordpress') }})</a>
      </li>
   </ul>
</template>


<style scoped>
li {
   width:fit-content;
}
ul.skill_tag_list {
   max-width:100%;
   list-style:none;
   margin:0;
   gap:1rem;

   color:white;
   background:var(--bg_dark);
}
@media screen and (max-width: 768px) {
   ul.skill_tag_list {
      gap:0.2rem;
      padding:0;
      margin:0;
   }
   .skill_tag {
      margin:0;
   }
}
.selected_filter {
   /* background:var(--bg_light); */
   font-weight:700;
}
li, a {
   margin:0;
   padding:.25rem .5rem .25rem .5rem;
   font-weight:400;
   cursor:pointer;
   border-radius:.5rem;
}
a {
   color:white;
}
a:hover {
   text-decoration:underline;
}
</style>