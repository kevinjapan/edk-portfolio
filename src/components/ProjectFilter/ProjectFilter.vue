<script setup lang="ts">

// we use Component v-model to implement two-way binding
const filter = defineModel()


const props = defineProps<{
   projects_list: Project[]
}>()

// to do : get no. of each project w/ each filter from props.projects_list
console.log('props',props.projects_list)

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
   <ul class="flex skill_tag_list w_full pt_0.5">
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('')" :class="{selected_filter: filter === ''}">
            All ({{ num_with_filter('all') }})</a>
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
.flex {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;

   flex-wrap:wrap;

}
ul.skill_tag_list {
   list-style:none;
   margin:0;
   margin-left:auto;
   margin-right:auto;
   gap:1rem;
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
   background:var(--bg_light);
}
li, a {
   margin:0;
   padding:.25rem .5rem .25rem .5rem;
   font-weight:400;
   cursor:pointer;
   border-radius:.5rem;
}
a:hover {
   background:var(--bg_lighter)
}
</style>