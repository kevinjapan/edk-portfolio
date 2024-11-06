<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import markdownit from 'markdown-it'


const props = defineProps<{
    section: TextBlock
}>()


// we handle basic markdown in the text contents of our json data files
const md = markdownit()
const rawHtml = ref('')

watchEffect(() => {    
    rawHtml.value = md.render(props.section.text)
})
</script>

<template>
    <p class="markdown_content" v-html="rawHtml"></p>
</template>

