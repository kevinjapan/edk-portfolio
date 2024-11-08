<script setup lang="ts">

const props = defineProps<{
    list: ListItem[]
}>()

</script>


<template>
    <ul>
        <li v-for="item in props.list">
            <a :href="item.link" target="_blank">{{ item.name }}</a>
        </li>
    </ul>
</template>


<style scoped>

ul {
   display:flex;
   list-style:none;
   margin:1rem auto 1rem auto;
   max-width:36rem;
   width:fit-content;
   text-align:center;
   border:solid 1px white;
   border-radius:.25rem;
   margin:0 auto;
   padding:.75rem 1rem !important;
}
li {
   background:hsl(0, 0%, 30%);
   border-radius:.5rem;
   margin:0 .25rem;
   padding:.25rem;
   padding-left:.5rem;
   padding-right:.5rem;
}
</style>