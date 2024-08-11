<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import type { Ref } from 'vue'


// to do : apply and comment clear example of the following:

// Typing ref()​
// ============
// Refs infer the type from the initial value: Types by Inference
const year = ref(2020)
// Sometimes we may need to specify complex types for a ref's inner value. 
const year_2: Ref<string | number> = ref('2020')
year.value = 2020 // ok!
year_2.value = '2021'


// Typing Component Props
// ======================
// 1. runtime declaration
// the defineProps() macro supports inferring the props types based on its argument:
// const props = defineProps({
//   foo: { type: String, required: true },
//   bar: Number
// })
// 2. type-based declaration 
// it is usually more straightforward to define props with pure types via a generic type argument:
// const props = defineProps<{
//   foo?: string
//   bar?: number
//   book?: Book
// }>()


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
         Vue.js
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

/* to do : these classes duplicated in other views -> move to global css file */
h1 {
   width:100%;
   text-align:center;
   margin:2rem 0 0 0;
   padding-bottom:1rem;
}
h1 {
   font-weight:200;
}
h2 {
   font-size:2.25rem;
   font-weight:200;
}
p {
   width:36rem;
   margin-left:auto;
   margin-right:auto;
   line-height:2rem;
}
.mt_0 {margin-top:0;}
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
