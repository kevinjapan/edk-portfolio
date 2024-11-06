<script setup lang="ts">
import CoverBlock from './CoverBlock/CoverBlock.vue'
import FeatureBlock from './FeatureBlock/FeatureBlock.vue'
import TextBlock from './TextBlock/TextBlock.vue'
import TitleBlock from './TitleBlock/TitleBlock.vue'


const props = defineProps<{
    section: ProjectSection
}>()

</script>

<template>

    <CoverBlock 
        v-if="section.blockType === 'CoverBlock'"
        :section="props.section as CoverBlock"
    />
    <FeatureBlock 
        v-if="section.blockType === 'FeatureBlock'"
        :section="props.section as FeatureBlock"
    />
    <TextBlock 
        v-if="section.blockType === 'TextBlock'"
        :section="props.section as TextBlock"
    />
    <TitleBlock 
        v-if="section.blockType === 'TitleBlock'"
        :section="props.section as TitleBlock"
    />
    
</template>

