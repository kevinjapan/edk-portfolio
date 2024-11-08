<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    section: TitleBlock
}>()

// future : whitelist and check 'styles' are valid css classnames for this Bloc
const class_list = props?.section?.styles?.join(' ')

const heading_level = computed(() => {
    return props.section.level ? 'h' + props.section.level : 'h3'
})
</script>

<template>
    <component :is="heading_level" :class="class_list !== '' ? class_list : ''">
        {{ props.section.text }}
    </component>
</template>

<style scoped>

h1, h2, h3, h4, h5, h6 {
    text-align: center;
}

</style>

