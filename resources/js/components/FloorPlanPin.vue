<template>
    <TextHelp :text="destination.name">
        <MapPin
            :class="cn('absolute h-8 w-8 -translate-x-1/2 -translate-y-full transform fill-blue-500 text-blue-300', props.class)"
            :style="{
                left: xAxis + '%',
                top: yAxis + '%',
            }"
        />
    </TextHelp>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Destination } from '@/types/models/destination';
import { MapPin } from 'lucide-vue-next';
import TextHelp from './TextHelp.vue';

const props = defineProps<{
    xAxis: number;
    yAxis: number;
    class?: string;
    destination: Destination;
}>();
</script>
