<script setup lang="ts">
import AppFooter from './components/App/AppFooter/AppFooter.vue'

</script>

<template>

   <nav class="fixed flex gap_1 " >
      <div class="flex ">
         <RouterLink to="/" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Home</RouterLink>
         <RouterLink to="/projects" class="view_link" activeClass="selected_view" exactActiveClass="selected_view">Projects</RouterLink>
      </div>
   </nav>
   
   <main>
      <RouterView />
   </main>

   <AppFooter/>

</template>

<style scoped>

nav {
   z-index:9999;

   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;

   /* we need 'flex-end' here for IOS safari - 'end' won't suffice */
   -webkit-box-pack:flex-end;
   -ms-flex-pack:flex-end;
   justify-content:flex-end;
   
   gap:1.5;

   width:100%;
   height:fit-content;
   padding-right:1rem;
   font-size:1.3rem;
   background:#36454f;
   user-select:none;
}
@media screen and (max-width: 768px) {
   nav {
      -webkit-box-pack:center;
      -ms-flex-pack:center;
      justify-content:center;
   }
}


main {
   width:100%;
   min-height:100vh;
   background:#36454f;
}

.view_link {
   font-weight:300;
   margin-left:.5rem;
   margin-right:.5rem;
   margin-top:.25rem;
   padding:.15rem;
   padding-left:1rem;
   padding-right:1rem;
   border-radius:.5rem;
}
a {
   text-decoration:none;
}
.selected_view {
   /* background:var(--bg_light); */
   border-radius:.5rem;
   font-weight:600;
}

a:hover {
   background:unset;
}
</style>
