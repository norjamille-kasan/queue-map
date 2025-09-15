<template>
    <div class="relative flex h-[1000px] max-h-[1000px] items-center justify-center">
        <img ref="imageRef" class="h-[1000px] max-h-[1000px] max-w-full" :src="image" alt="floor plan" />
        <template v-if="props.kioskXAxis && props.kioskYAxis && mapPinIsVisible">
            <YouAreHere :x-axis="Number(props.kioskXAxis)" :y-axis="Number(props.kioskYAxis)" />
        </template>
        <KioskDestinationPin
            v-if="mapPinIsVisible"
            v-for="destination in destinations"
            :name="destination.name"
            :active="kioskState.selectedDestinationid.value === destination.id"
            :x-axis="Number(destination.x_axis)"
            :y-axis="Number(destination.y_axis)"
        />
    </div>
</template>

<script setup lang="ts">
import { KioskSettings } from '@/enums/kiosk-settings';
import { useKioskState } from '@/stores/kioskStore';
import { Destination } from '@/types/models/destination';
import { useLocalStorage } from '@vueuse/core';
import KioskDestinationPin from '../KioskDestinationPin.vue';
import YouAreHere from '../YouAreHere.vue';

const props = defineProps<{
    image: string;
    kioskXAxis: number | null;
    kioskYAxis: number | null;
    destinations: Destination[];
}>();

const kioskState = useKioskState();
const mapPinIsVisible = useLocalStorage(KioskSettings.MAP_PIN_VISIBILITY, false);
</script>
