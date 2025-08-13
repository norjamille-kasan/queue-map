<template>
    <div
        class="absolute flex -translate-x-1/2 -translate-y-full transform flex-col items-center"
        :style="{
            left: xAxis + '%',
            top: yAxis + '%',
        }"
    >
        <!-- Label above -->
        <div class="mb-1 rounded-full bg-red-500 px-3 py-1 text-xs font-bold whitespace-nowrap text-white uppercase shadow-md">You are here</div>

        <!-- MapPin icon -->
        <MapPin class="h-8 w-8 fill-red-600 text-red-200" />
    </div>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';

const props = defineProps<{
    xAxis: number;
    yAxis: number;
}>();
</script>
