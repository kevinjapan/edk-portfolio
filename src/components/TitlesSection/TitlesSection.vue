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
            <section class="id_tag">
               <h2>{{ props.title }}</h2>            
               <p class="item">{{ props.location }}</p>
            </section>
         </section>

         <section class="titles_img">
            <figure class="block">
               <img class="mugshot" 
                  :src="props.img_src"
                  alt="profile photo"/>
            </figure>
         </section>

      </section>

</template>

<style scoped>

section.titles {
   display:grid;
   grid-template-columns:2fr 1fr;
   gap:2rem;
   width:100%;
   padding:0;
   margin:0;
}
section.titles_img {
   text-align:right;
}
@media screen and (max-width: 768px) {

   section.titles {
      grid-template-columns:1fr;
      align-items:center;
      justify-content:center;
   }
   section.titles_img {
      text-align:left;
      padding-left:0;
      order:1;
   }
   section.titles_text {
      order:2;
      margin-bottom:3rem;
   }
}
section.id_tag {
   display:flex;
   flex-direction:column;
   gap:0;
   /* border:solid 3px lightgrey; */
   width:100%;
   height:fit-content;
   /* padding:.25rem 1rem; */
   border-radius:1rem;
}
section.id_tag h2 {
   font-size:3rem !important;
   margin:0;
   padding:0;
}

section.titles_text {
   width:100%;
} 
figure {
   width:100%;
   margin:0;
   padding:0;
}
img {
   width:100%;
   max-width:240px;
}
.block {
   display:block;
}
h1 {
   font-size:3.5rem;
   /* letter-spacing:12px; */
   margin:0;
   /* font-weight:800; */
   color:#4a4a4a;
   width:100%;
   margin-bottom:1rem;
   padding:0;
}
h2 {
   font-size:1.5rem  !important;
   white-space:nowrap;
   font-weight:500;
   /* text-align:center; */
   width:100%;
   /* border:solid 1px blue; */
   margin:0;
   margin-top:2.5rem !important;
   margin-bottom:1.5rem;
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

   h2 {
      font-size:3rem;
      margin-top:0rem !important;
   }
}
</style>