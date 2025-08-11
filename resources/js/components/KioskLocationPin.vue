<template>
    <Monitor
        class="absolute h-8 w-8 -translate-x-1/2 -translate-y-full transform fill-blue-500 text-blue-300"
        :style="{
            left: xAxis + '%',
            top: yAxis + '%',
        }"
    />
</template>

<script setup lang="ts">
import { Monitor } from 'lucide-vue-next';
const props = defineProps<{
    xAxis: number;
    yAxis: number;
}>();
</script>
