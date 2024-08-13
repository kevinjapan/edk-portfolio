<script setup lang="ts">
import { onBeforeMount } from 'vue'


const user: User = {
  name: "kev hastie",
  id: 1
}

onBeforeMount(async() => {
   window.scroll(0,0)
})

</script>

<template>
   <section class="view_section mt_0">

      <h1>Portfolio</h1>

      <h2>{{ user.name }}</h2>
      
      <p><span class="slot_label">location :</span>
         Arbroath, Scotland
      </p>

      <p><span class="slot_label">current learning :</span>
         <span class="item">Vue.js</span>
      </p>

      <p><span class="slot_label">technologies :</span>
         <span class="item">JavaScript</span>,
         <span class="item">React.js</span>,
         <span class="item">Vue.js</span>,
         <span class="item">Electron</span>,
         <span class="item">PHP</span>,
         <span class="item">HTML</span>,
         <span class="item">WordPress</span>,
         <span class="item">MySQL</span>,
         <span class="item">SQLite</span>,
         <span class="item">CSS</span>,
         <span class="item">Tailwind</span>
      </p>
      <p>
         <span class="slot_label">prev technologies :</span>
         <span class="item">Java</span>,
         <span class="item">C++</span>
      </p>
      <p>
         <span class="slot_label">experience :</span>
         <span class="item">Software Developer</span>,
         <span class="item">Technical Lead</span>,
         <span class="item">Assistant Language Teacher</span>,
         <span class="item">Project Management</span>
      </p>
      <p>
         <span class="slot_label">education :</span>
         <span class="item">BSc Zoology</span>,
         <span class="item">PGDip Software Engineering</span>
      </p>

   </section>
</template>

<style scoped>

@media screen and (max-width: 768px) {
   section.view_section {
      margin-top:3rem;
   }
}
.slot_label {
   font-style:italic;
   color:hsl(0, 0%, 60%);
}

span.item {
   display:inline;
   background:hsl(60, 100%, 86%);
   padding:.15rem;
   padding-left:.35rem;
   padding-right:.35rem;
   border-radius:.5rem;
   white-space: nowrap;
}
</style>
