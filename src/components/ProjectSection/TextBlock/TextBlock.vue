<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import markdownit from 'markdown-it'


const props = defineProps<{
    section: TextBlock
}>()


// we handle basic markdown in the text contents of our json data files
const md = markdownit()
const rawHtml = ref('')

// future : whitelist and check 'styles' are valid css classnames for this Block
const class_list = props?.section?.styles?.join(' ')

watchEffect(() => {    
    rawHtml.value = md.render(props.section.text)
})
</script>

<template>
    <p class="markdown_content"  :class="class_list !== '' ? class_list : ''" v-html="rawHtml"></p>
</template>

