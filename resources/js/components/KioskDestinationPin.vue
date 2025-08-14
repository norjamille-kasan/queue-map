<template>
    <div
        class="absolute flex -translate-x-1/2 -translate-y-full transform flex-col items-center"
        :style="{
            left: xAxis + '%',
            top: yAxis + '%',
        }"
    >
        <!-- Label above -->
        <div
            :class="showText ? 'opacity-100' : 'opacity-0'"
            class="mb-1 rounded-full bg-blue-500 px-3 py-1 text-xs font-bold whitespace-nowrap text-white uppercase shadow-md"
        >
            {{ name }}
        </div>

        <!-- MapPin icon -->
        <button>
            <MapPin @click="showText = !showText" class="h-8 w-8 fill-blue-600 text-blue-200" />
        </button>
    </div>
</template>

<script setup lang="ts">
import { MapPin } from 'lucide-vue-next';
import { ref } from 'vue';

const props = defineProps<{
    xAxis: number;
    yAxis: number;
    name: string;
}>();

const showText = ref(false);
</script>
