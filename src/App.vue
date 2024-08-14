<script setup lang="ts">
import Footer from './components/Footer/footer.vue'

</script>

<template>

   <nav class="flex gap_1 fixed pr_3">
      <div class="flex justify_around gap_1 mr_2 bg_white">
         <RouterLink to="/" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Home</RouterLink>
         <RouterLink to="/projects" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Projects</RouterLink>
         <!-- <RouterLink to="/about" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">About</RouterLink> -->
      </div>
   </nav>
   
   <main>
      <RouterView />
   </main>

   <Footer/>

</template>

<style scoped>
nav {
   height:fit-content;
   width:100%;
   text-align:right;
   padding-right:2rem;
   z-index:9999;
   font-size:1.3rem;
   background:white;
   /* border-bottom:solid 1px hsl(0, 0%, 98%); */
   justify-content:end;
}

@media screen and (max-width: 768px) {
   /* we only have bg on sm to cover scrolling ti
   tles  */
   nav {
      border-bottom:solid 1px hsl(0, 0%, 92%);
      justify-content:center;
   }
}
.bg_white {
   background:white;
}
.view_link {
   font-weight:300;
   margin-top:.25rem;
   padding:.15rem;
   padding-left:.25rem;
   padding-right:.25rem;
   border-radius:.5rem;
}
.fixed {
   position:fixed;
   top:0;
   left:0;
}
main {
   width:100%;
   min-height:100vh;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.selected_view {
   background:var(--bg_light);
   border-radius:1rem;
}
</style>
