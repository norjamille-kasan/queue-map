<template>
    <div class="relative inline-block">
        <img ref="imageRef" class="h-[800px] max-h-[800px]" :src="image" alt="floor plan" />
        <template v-if="props.kioskXAxis && props.kioskYAxis && mapPinIsVisible">
            <YouAreHere :x-axis="Number(props.kioskXAxis)" :y-axis="Number(props.kioskYAxis)" />
        </template>
        <KioskDestinationPin
            v-if="mapPinIsVisible"
            v-for="destination in destinations"
            :name="destination.name"
            :x-axis="Number(destination.x_axis)"
            :y-axis="Number(destination.y_axis)"
        />
    </div>
</template>

<script setup lang="ts">
import { KioskSettings } from '@/enums/kiosk-settings';
import { Destination } from '@/types/models/destination';
import { useLocalStorage } from '@vueuse/core';
import KioskDestinationPin from '../KioskDestinationPin.vue';
import YouAreHere from '../YouAreHere.vue';

const props = defineProps<{
    image: string;
    kioskXAxis?: number;
    kioskYAxis?: number;
    destinations: Destination[];
}>();

const mapPinIsVisible = useLocalStorage(KioskSettings.MAP_PIN_VISIBILITY, false);
</script>
