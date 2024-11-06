<script setup lang="ts">

const props = defineProps<{
    section: FeatureBlock
}>()



// "blockType":"FeatureBlock",
// "title":"Tech Stack",
// "text":"some leading text here",
// "list":[
//     {"name":"Electron"},
//     {"name":"SQLite"},
//     {"name":"JavaScript"},
//     {"name":"Node.js"}
// ]

// deconstruct featureImg
const { src, alt } = props.section.featureImg

// future : whitelist 'styles' are valid css classnames this Block
const class_list = props?.section?.styles?.join(' ')

</script>

<template>
<!-- 
:class="{selected_filter: filter === ''}" 
 :class="{reverse_order: props?.section?.styles}"
 -->

    <section class="feature_block fade_in non_mobile" :class="class_list !== '' ? class_list : ''">
        <figure>
            <img
                :src="src"
                :alt="alt" />
        </figure>
        <div>
            <h1>{{ props?.section?.title }}</h1>
            <h3>{{ props?.section?.list }}</h3>
            <h5>
                A simple classic WordPress theme for Web Agency websites.
            </h5>
            <p>
                WDA provides a range of block patterns for rapid and consistent
                deployment of styled content across your site.            
            </p>
            <p>
                WDA is supplemented with a set of supporting plugins meeting
                the most common needs of Web Agency websites.
            </p>
            <button>
                <a target="_blank" href="https://github.com/kevinjapan/Web-Dev-Agent">Download from GitHub</a>
            </button>    
        </div>
    </section>

</template>

