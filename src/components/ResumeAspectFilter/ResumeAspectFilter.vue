<script setup lang="ts">

// we use Component v-model to implement two-way binding
const filter = defineModel()


const set_filter = (filter_value: string) => {
   filter.value = filter_value
}


</script>


<template>
   <ul class="flex flex_wrap skill_tag_list  pt_0.5 no_user_select">
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('')" :class="{selected_filter: filter === ''}">
            All</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Languages')" :class="{selected_filter: filter === 'Languages'}">
            Languages</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Frameworks')" :class="{selected_filter: filter === 'Frameworks'}">
            Frameworks</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Web Design')" :class="{selected_filter: filter === 'Web Design'}">
            Web Design</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Database')" :class="{selected_filter: filter === 'Database'}">
            Database</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Experience')" :class="{selected_filter: filter === 'Experience'}">
            Experience</a>
      </li>
      <li class="skill_tag">
         <a class="tech_tag" @click="set_filter('Education')" :class="{selected_filter: filter === 'Education'}">
            Education</a>
      </li>
   </ul>
</template>


<style scoped>
li {
   width:fit-content;
}
ul.skill_tag_list {
   -webkit-box-pack:start;
   -ms-flex-pack:start;
   justify-content:flex-start;
   gap:0rem;
   max-width:100%;
   list-style:none;
   margin:0;
   padding:0 .5rem;

   color:white;
   background:var(--bg_dark);background:#36454f;
   color:black;
}
@media screen and (max-width: 768px) {
   ul.skill_tag_list {
      gap:0;
      padding:0;
      margin:0;
      justify-content:center;
   }
   .skill_tag {
      margin:0;
      padding:0;
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
   text-decoration:none;
}
a:hover {
   text-decoration:underline;
}
</style>