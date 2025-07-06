<script setup lang="ts">


const props = defineProps<{
   title: string
   img_src: string
   location: string
}>()


</script>

<template>
   
      <section class="titles">

         <section class="titles_text">
               <h1>Portfolio</h1>
               <h2>{{ props.title }}</h2>            
               <p class="item">{{ props.location }}</p>
         </section>
         <section class="titles_img">
               <figure class="block"><img class="mugshot" 
            :src="props.img_src"
            alt="profile photo"/></figure>


         </section>


      </section>

</template>

<style scoped>

section.titles {
   display:grid;
   grid-template-columns:1fr 2fr;
   gap:2rem;
   width:100%;
   padding:0;
   margin:0;
}
/* section.titles_img {
   width:50%;
   background:pink;
}
section.titles_text {
   width:50%;
   background:lightgreen;
} */
figure {
   width:100%;
   margin:0;
   padding:0;
}
img {
   width:100%;
   /* to do : add slight tilt and paperclip! */
}
.block {
   display:block;
}
h1 {
   font-size:4rem;
   /* letter-spacing:12px; */
   margin:0;
   /* font-weight:800; */
   color:#4a4a4a;
   width:100%;
   margin-bottom:1rem;
   padding:0;
}
h2 {
   font-size:2rem  !important;
   white-space:nowrap;
   font-weight:200;
   /* text-align:center; */
   width:100%;
   /* border:solid 1px blue; */
   margin:0;
   padding:0;
   width:100%;
   line-height:3rem;
}
h3 {
   margin:0;
   padding:0;
}
p {
   width:100%;
   margin:0;
   padding:0;
}

@media screen and (max-width: 768px) {
   /* h1 {
   } */
   h2 {
      font-size:3rem;
   }
}
</style>