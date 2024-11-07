<script setup lang="ts">
import ListBlock from '../ListBlock/ListBlock.vue'
import Paragraph from '../Paragraph/Paragraph.vue'


const props = defineProps<{
    section: FeatureBlock
}>()


// deconstruct featureImg
const { src, alt } = props.section.featureImg

// client can provide single string or array of strings (separate paragraphs)
const text = Array.isArray(props.section.text) ? [...props.section.text] : [props.section.text]

// future : whitelist and check 'styles' are valid css classnames for this Block
const class_list = props?.section?.styles?.join(' ')

</script>

<template>

    <section class="feature_block fade_in non_mobile" :class="class_list !== '' ? class_list : ''">
        <figure>
            <img
                :src="src"
                :alt="alt" />
        </figure>
        <div>
            <h1>{{ props?.section?.title }}</h1>
            <h3>{{ props?.section?.tagline }}</h3>
            <Paragraph v-for="paragraph in text" :text="paragraph"/>
            
            <ListBlock :list="props?.section?.list"/>

            <button>
                <a target="_blank" href="https://github.com/kevinjapan/Web-Dev-Agent">Download from GitHub</a>
            </button>

        </div>
    </section>

</template>

