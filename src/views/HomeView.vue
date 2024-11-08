<script setup lang="ts">
import { onBeforeMount } from 'vue'


const user: User = {
  first_name: "Kev",
  second_name: "Hastie",
  id: 1
}

onBeforeMount(async() => {
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})



</script>

<template>
   <section class="view_section mt_0">

      <h1 class="text_center">Portfolio</h1>

      <section class="meta_grid grid">

         <span class="slot_label">
            <img class="mugshot" src="/imgs/mugshot_mirror.jpg" alt="profile photo"/>
         </span>
         <span class="slot_value align_self_center">
            <span class="item"><h2>
               <span class="bold">{{ user.first_name }}</span> {{ user.second_name }}</h2>
            </span>
         </span>

         <span class="slot_label">location</span>
         <span class="slot_value">
            <span class="item">Arbroath, Scotland</span>
         </span>

         <span class="slot_label">technologies</span>
         <span class="slot_value">
            <span class="item">JavaScript</span>,
            <span class="item">React</span>,
            <span class="item">Vue</span>,
            <span class="item">TypeScript</span>,
            <span class="item">Electron</span>,
            <span class="item">PHP</span>,
            <span class="item">HTML</span>,
            <span class="item">MySQL</span>,
            <span class="item">SQLite</span>,
            <span class="item">CSS</span>,
            <span class="item">Tailwind</span>,
            <span class="item">WordPress</span>
         </span>
    
         <span class="slot_label">history</span>
         <span class="slot_value">
            <span class="item">Java</span>,
            <span class="item">C++</span>,
            <span class="item">ASP</span>
         </span>
            
         <span class="slot_label">experience</span>
         <span class="slot_value">
            <span class="item">Web Developer</span>,
            <span class="item">Software Engineer</span>,
            <span class="item">Technical Lead</span>,
            <span class="item">Assistant Language Teacher</span>,
            <span class="item">Project Management</span>
         </span>
         
         <span class="slot_label">education</span>
         <span class="slot_value">
            <span class="item">BSc Zoology</span>,
            <span class="item">PGDip Software Engineering</span>
         </span>

      </section>

      <section class="home_links">
         <img class="github_icon" src="../assets/imgs/github-mark-white.png"/>
         <a href="https://github.com/kevinjapan" target="_blank">Github</a>
      </section>

   </section>
</template>

<style scoped>

.meta_grid {

   grid-template-columns:2fr 3fr;

   -webkit-box-align:flex-start;
   -ms-flex-align:flex-start;
   align-items:flex-start;

   gap:1rem;

   max-width:600px;
   margin:auto;
   margin-top:5rem;
   padding-bottom:5rem;
}


@media screen and (max-width: 768px) {
   section.view_section {
      margin-top:3rem;
   }
   /* improve UI readability on sm */
   p {
      margin-top:2rem;
      margin-bottom:2rem;
   }
}
.meta_grid img {
   max-width:100%;
   border:solid 3px white;
   border-radius:50%;
}
.slot_label {
   color:hsl(0, 0%, 55%);
   padding-right:.5rem;
   text-align:right;
}
.slot_value {
   color:white;
   text-align:left;
}
span.item {
   display:inline;
   font-weight:400;
   white-space: normal;
}
h1 {
   margin-top:5rem;
   letter-spacing:3rem;
   color:white;
}
h2 {
   font-size:3.75rem;
   margin:0;
   margin-top:-1rem;
   letter-spacing:.5rem;
   white-space:nowrap;
}
@media screen and (max-width: 768px) {
   h1 {
      letter-spacing:1rem;
   }
   h2 {
      font-size:3rem;
      letter-spacing:unset;
   }
   .meta_grid img {
      max-width:80%;
   }
}

.home_links {
   display:flex;
   justify-content:center;
}
.github_icon {
   width:36px;
   height:36px;
}

</style>
