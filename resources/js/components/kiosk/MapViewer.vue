<template>
    <div class="relative inline-block">
        <img ref="imageRef" class="h-[800px] max-h-[800px]" :src="image" alt="floor plan" />
        <template v-if="props.kioskXAxis && props.kioskYAxis">
            <YouAreHere :x-axis="Number(props.kioskXAxis)" :y-axis="Number(props.kioskYAxis)" />
        </template>
    </div>
</template>

<script setup lang="ts">
import YouAreHere from '../YouAreHere.vue';

const props = defineProps<{
    image: string;
    kioskXAxis?: number;
    kioskYAxis?: number;
}>();
</script>
