<script setup lang="ts">
// import { computed } from 'vue'

// type-based declaration
// it is usually more straightforward to define props with pure types via a generic type argument
// The compiler will try to do its best to infer the equivalent runtime options based on the type argument.
const props = defineProps<{
  resume_item: ResumeItem
  filter: string
}>()





</script>


<template>



                        {{ props.resume_item.title }}
   
   
</template>


<style scoped>

section.resume_item_teaser {
   width:fit-content;
   height:100%;
   height:fit-content;
   margin:0;
   /* padding:.5rem; */
   padding-bottom:.8rem;
   /* border:solid 1px hsl(0, 0%, 90%); */
   /* border-radius:.5rem; */

   background:white;

   cursor:pointer;
   overflow:hidden;
   text-align:left;
   user-select:none;
   
}

section.project_teaser img {
   scale:1;
   -webkit-transition: scale 1s;
   -o-transition: scale 1s;
   transition: scale 1s;
}
section.project_teaser:hover img {
   scale:1.2;
   -webkit-transition: scale 0.5s;
   -o-transition: scale 0.5s;
   transition: scale 0.5s;
}
img.teaser_card_img {
   object-fit:cover;
   object-position:top left;
}
section.teaser_slots {
   border:unset;
   box-shadow:unset;
   padding:0;
   padding-left:.5rem;
   padding-right:.5rem;
}

section.project_teaser_texts {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;
   -webkit-box-orient:vertical;
   -webkit-box-direction:normal;
   -ms-flex-direction:column;
   flex-direction:column;
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
   gap:0;
   margin:0;
   padding:.5rem 1rem;
}

section.teaser_title_tagline {
   color:white;
   width:fit-content !important;
   margin:0;padding:0;
}
section.teaser_title_tagline h2 {
   font-size:2.14rem;
   font-weight:500;
   line-height:2.3rem;
   text-align:center;
   margin-bottom:.275rem;
   color:white;
}
/* section.teaser_title_tagline {
   -webkit-box-flex:1;
   -ms-flex-positive:1;
   flex-grow:1;
   color:white;
   padding:.25rem 1rem;
   border:solid 1px hsl(0, 0%, 85%);
} */
section.teaser_title_tagline h3 {
   font-size:1.3rem;
   font-weight:300;
   line-height:1.4rem;
   margin:0;
   text-align:center;
   color:hsl(0, 0%, 25%);
}

/* override (limit widths) on main styles */
h2.teaser_title {
   font-size:2rem;
   line-height:2.1rem;
   font-weight:700;
   white-space:normal;
   margin:0;
   padding:0;
}
p {
   /* override page p width limits */
   max-width:100%;
   margin:0;
   padding:0;padding-bottom:1rem !important;
   font-size:1rem;
   line-height:1.15rem;
   text-align:center;
   color:hsl(0, 0%, 30%);
}
.teaser_text {
   margin:.75rem 0 0 0;
}

a {
   font-weight:400;
   color:hsl(241, 91%, 65%);
   cursor:pointer;
   padding:.25rem;
   padding-left:.5rem;
   padding-right:.5rem;
   border-radius:.25rem;
}
h2, h2 a {
   color:var(--bg_dark);
   font-weight:900;
}
a:hover {
   background:hsl(0, 0%, 92%);
}
.title_link {
   padding:0;
   white-space:pre-wrap;
}

h2 > div.no_title_link {
   background:yellow;
}

.img_acknowledge {
   position:absolute;
   padding:.15rem .25rem;
   bottom:15px;right:5px;
   /* background:white; */
   font-size:.8rem;
   font-style:italic;
   text-align:right;
}
.img_acknowledge  {
   color:white;
}
.img_acknowledge:hover {
   color:blue;
   background:white;
}


div.teaser_tagline {
   font-size:1.25rem;
   font-weight:400;
   color:black;
}
.project_status {
   display:inline;
   color:black;
   background:hsl(60, 100%, 80%);
   padding-left:.25rem;
   padding-right:.25rem;
}
div.visit_site_cta {
   width:fit-content;
   margin:1rem 0;
}

figure.project_teaser_img {
   position:relative;
   width:100%;
   margin:0 auto;
   overflow:hidden;
}




ul {
   list-style:none;
   margin:0;
   padding:0;
}
li {
   padding-top:.25rem;
}


</style>