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
   display:-ms-grid;
   display:grid;
   -ms-grid-columns:2fr 1fr;
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
      -ms-grid-columns:1fr;
      grid-template-columns:1fr;
      -webkit-box-align:center;
      -ms-flex-align:center;
      align-items:center;
      -webkit-box-pack:center;
      -ms-flex-pack:center;
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
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;
   gap:0;

   width:100%;
   height:fit-content;
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
   margin:0;
   color:#4a4a4a;
   width:100%;
   margin-bottom:1rem;
   padding:0;
}
h2 {
   font-size:1.5rem  !important;
   white-space:nowrap;
   font-weight:500;
   width:100%;
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