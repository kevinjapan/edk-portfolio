<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import markdownit from 'markdown-it'



const props = defineProps<{
    text: string
}>()

// we handle basic markdown in the text contents of our json data files
const md = markdownit()
const rawHtml = ref('')

watchEffect(() => {
    // renderInline will not enclose w/in <p> tags
    rawHtml.value = md.renderInline(props.text)
})

</script>

<template>
    <p v-html="rawHtml"></p>
</template>
