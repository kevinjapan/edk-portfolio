<script setup lang="ts">

</script>


<template>

   <section class="view_section mt_0">
      <h1 class="text_center">Page Not Found</h1>
      <p class="text_center">Sorry, a page or resouce was not found.</p>
      <p class="text_center pt_1">You might find what you're looking for here:</p>
   </section>

   <section class="mt_2">
      <div class="flex  justify_center gap_1 text_center align_items_center">
         <RouterLink to="/" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Home</RouterLink>
         <RouterLink to="/projects" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Projects</RouterLink>
      </div>
   </section>

</template>


<style scoped>
section.view_section {
   margin-top:7rem;
   color:white;
}

h1 {
   font-size:2.5rem;
   margin-top:5rem;
   margin-bottom:0;padding-bottom:0;
   /* letter-spacing:1rem; */
   color:white;
}
h2 {
   font-size:3.75rem;
   margin:0;
   margin-top:-1rem;
   letter-spacing:.5rem;
   white-space:nowrap;
}
p {
   margin-top:.5rem;
}
a {
   border:solid 1px white;
   padding:.5rem 1rem;
   font-weight:400;
   text-decoration:none;
}

a:hover {
   color:blue;
   background:white;
}
.pt_1 {padding-top:1rem;}
@media screen and (max-width: 768px) {
   section.view_section {
      margin-top:7rem;
   }
   /* improve UI readability on sm */
   p {
      margin-top:2rem;
      margin-bottom:2rem;
   }
}
</style>
