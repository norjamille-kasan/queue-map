<template>
    <div
        :class="active ? 'animate-bounce' : ''"
        class="absolute flex -translate-x-1/2 -translate-y-full transform flex-col items-center"
        :style="{
            left: xAxis + '%',
            top: yAxis + '%',
        }"
    >
        <!-- Label above -->
        <div
            :class="
                cn(
                    'mb-1 rounded-full px-3 py-1 text-xs font-bold whitespace-nowrap text-white uppercase shadow-md',
                    showText || props.active ? 'opacity-100' : 'opacity-0',
                    props.active ? 'bg-red-500' : 'bg-blue-500',
                )
            "
        >
            {{ name }}
        </div>

        <!-- MapPin icon -->
        <button>
            <MapPin
                @click="showText = !showText"
                :class="cn('h-8 w-8', props.active ? 'h-12 w-12 fill-red-600 text-red-200' : 'fill-blue-600 text-blue-200')"
            />
        </button>
    </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { MapPin } from 'lucide-vue-next';
import { ref } from 'vue';

const props = withDefaults(
    defineProps<{
        xAxis: number;
        yAxis: number;
        name: string;
        active?: boolean;
    }>(),
    {
        active: false,
    },
);

const showText = ref(false);
</script>
