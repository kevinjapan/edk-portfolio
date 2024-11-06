<script setup lang="ts">
import ListBlock from '../ListBlock/ListBlock.vue'


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

// future : whitelist and check 'styles' are valid css classnames for this Block
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
            <h5>{{ props?.section?.tagline }}</h5>
            <p>{{ props?.section?.text }}</p>
            
            <ListBlock :list="props?.section?.list"/>

            <button>
                <a target="_blank" href="https://github.com/kevinjapan/Web-Dev-Agent">Download from GitHub</a>
            </button>

        </div>
    </section>

</template>

