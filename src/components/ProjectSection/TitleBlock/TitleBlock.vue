<script setup lang="ts">

const props = defineProps<{
    section: TitleBlock
}>()




</script>

<template>
    <h1>{{ props.section.text }}</h1>
</template>

