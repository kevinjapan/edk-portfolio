<script setup lang="ts">
import { onBeforeMount, watchEffect } from 'vue'
import { init_fade_ins } from '@/utilities/intersections/intersections'
import TitlesSection from '@/components/TitlesSection/TitlesSection.vue'
import DomainSection from '@/components/DomainSection/DomainSection.vue'
import SubDomainSection from '@/components/SubDomainSection/SubDomainSection.vue'
import SkillSlot from '@/components/SkillSlot/SkillSlot.vue'


onBeforeMount(async() => {
   // Firefox needs a delay to render page and effect this scroll
   setTimeout(() => window.scroll(0,0),100)
})

watchEffect(() => {
   setTimeout(() => init_fade_ins(),500)
})


</script>

<template>

   <section class="home_view">

   <h1>Portfolio</h1>

   <section class="portfolio_home">

      <section class="view_section no_user_select mt_0">

         <TitlesSection 
            title="Kev Hastie" 
            img_src="/imgs/mugshot_mirror.jpg" 
            location="Arbroath, Scotland" />

         <DomainSection title="Technology">

            <SubDomainSection title="Languages">
               <SkillSlot title="JavaScript"/>
               <SkillSlot title="TypeScript"/>
               <SkillSlot title="PHP"/>
               <SkillSlot title="HTML"/>
               <SkillSlot title="CSS"/>
            </SubDomainSection>

            <SubDomainSection title="Frameworks">
               <SkillSlot title="Vue"/>
               <SkillSlot title="React"/>
               <SkillSlot title="Electron"/>
               <SkillSlot title="Tailwind"/>
            </SubDomainSection>
               
            <SubDomainSection title="Web Design">
               <SkillSlot title="WordPress"/>
               <SkillSlot title="SquareSpace"/>
               <SkillSlot title="Figma"/>
            </SubDomainSection>

            <SubDomainSection title="Database">
               <SkillSlot title="MySQL"/>
               <SkillSlot title="SQLite"/>
            </SubDomainSection>

         </DomainSection>

         <DomainSection title="Experience">

            <SkillSlot title="Web Developer"/>
            <SkillSlot title="Software Engineer"/>
            <SkillSlot title="Technical Lead"/>
            <SkillSlot title="Assistant Language Teacher"/>
            <SkillSlot title="Project Manager"/>

         </DomainSection>            

         <DomainSection title="Education">

            <SkillSlot title="BSc Zoology"/>
            <SkillSlot title="PG Dip Software Engineering"/>

         </DomainSection>

      </section>
   </section>
   </section>
</template>

<style scoped>
section.home_view {
   user-select:none;
}
section.portfolio_home {
   margin:5rem auto;
   padding:2rem 0;
   background:#fafadc;
   width:720px;
   max-width:90%;
   padding:1rem;
   border-radius:.5rem;
   /* text-align:center; */
}
.meta_grid {

   grid-template-columns:1fr;

   -webkit-box-align:flex-start;
   -ms-flex-align:flex-start;
   align-items:flex-start;

   gap:2rem;

   max-width:600px;
   margin:auto;
   margin-top:5rem;
   padding-bottom:5rem;
}


@media screen and (min-width: 768px) {
   /* section.titles_section {
      display:flex;
      flex-direction: column;
      gap:0;
      padding:2rem;
   } */
   section.view_section {
      display:flex;
      flex-direction:column;
      gap:2rem;
      padding:1rem 2rem;
   }
   /* improve UI readability on sm */
   p {
      margin-top:2rem;
      margin-bottom:2rem;
   }
}




h1 {
   color:white;
   padding-left:1rem;
}
@media screen and (max-width: 768px) {
   h1 {
      text-align:center;
      padding-top:2rem !important;
   }
}
h3 {
   letter-spacing:12px;
   font-size:2rem;
   font-weight:700;
}
h4 {
   font-size:1.3rem;
   margin:1.5rem 0 .5rem 1.25rem;
   line-height:1rem;
   font-weight:600;
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
ul {
   margin:0;
}

.home_links {
   display:-webkit-box;
   display:-ms-flexbox;
   display:flex;   
   -webkit-box-pack:center;
   -ms-flex-pack:center;
   justify-content:center;
}
.github_icon {
   width:36px;
   height:36px;
}
.no_user_select {
   user-select:none;
}

</style>
