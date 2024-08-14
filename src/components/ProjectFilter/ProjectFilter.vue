<script setup lang="ts">

// we use Component v-model to implement two-way binding
const filter = defineModel()

const set_filter = (filter_value: string) => {
   filter.value = filter_value
}

</script>


<template>
   <ul class="flex skill_tag_list w_full pt_0.5">
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('')" :class="{selected_filter: filter === ''}">
            All</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('javascript')" :class="{selected_filter: filter === 'javascript'}">
            JavaScript</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('vue.js')" :class="{selected_filter: filter === 'vue.js'}">
            Vue.js</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('react.js')" :class="{selected_filter: filter === 'react.js'}">
            React.js</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('php')" :class="{selected_filter: filter === 'php'}">
            PHP</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('css')" :class="{selected_filter: filter === 'css'}">
            CSS</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('wordpress')" :class="{selected_filter: filter === 'wordpress'}">
            WordPress</a>
      </li>
   </ul>
</template>


<style scoped>
.flex {
   display:flex;
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