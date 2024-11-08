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
            <h3 v-if="props.section.tagline">{{ props?.section?.tagline }}</h3>
            <Paragraph v-if="text" v-for="paragraph in text" :text="paragraph"/>
            
            <ListBlock v-if="props?.section?.list && props?.section?.list?.length > 0" :list="props?.section?.list"/>

            <button v-if="props.section.button">
                <a target="_blank" href="https://github.com/kevinjapan/Web-Dev-Agent">Download from GitHub</a>
            </button>

        </div>
    </section>

</template>



<style scoped>
p {
    text-align:center;
}
@media screen and (min-width: 768px) {
    p {
        text-align:left;
    }
}
/* div.feature_block_text {
    border:solid 4px orange;
    padding:0;
    text-align:center;
    justify-content:flex-start;
} */
</style>