<script setup lang="ts">

const props = defineProps<{
    list: ListItem[]
}>()

</script>



<template>

    <ul>
        <li v-for="item in props.list">
            {{ item }}
        </li>
    </ul>

</template>

<style scoped>
ul {
    list-style:none;
}
</style>