<script setup lang="ts">

const props = defineProps<{
    section: CoverBlock
}>()


// "blockType":"CoverBlock",
// "bgImgSrc":"/imgs/stc-homepage.jpg",
// "bgImgAlt":"Photo of the Signal Tower Museum, Arbroath.",
// "overlay":{
//     "heading":"Signal Tower Capture",
//     "tagline":"Desktop collections application for archiving files on your local machine."
// }

// deconstruct coverImg
const { src, alt } = props.section.coverImg

// future : whitelist and check 'styles' are valid css classnames for this Block
const class_list = props?.section?.styles?.join(' ')

// to do : re-enable 'fade_in' on bg_img below?
</script>

<template>

    <section class="cover_block bg_dark_aqua mobile_only" :class="class_list !== '' ? class_list : ''">
      <img 
         class="bg_img" 
         :src="src" 
         :alt="alt" 
      />
      <div class="overlay">
         <h1>{{ props?.section?.overlay?.heading }}</h1>
         <h2>{{ props?.section?.overlay?.tagline }}</h2> 
         <p>{{ props?.section?.overlay?.text }}</p>
      </div>
   </section>

</template>

