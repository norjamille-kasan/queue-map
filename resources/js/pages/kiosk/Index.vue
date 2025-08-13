<template>
    <div class="flex h-screen max-h-screen flex-col bg-background">
        <div class="flex items-center gap-4 p-2">
            <Button class="h-12 font-mono text-2xl font-semibold has-[>svg]:px-6">
                <SearchIcon class="size-8" />
                FIND PLACE
            </Button>
            <MapPinVisibility />
        </div>
        <div class="mx-auto mt-10">
            <MapViewer :kiosk-x-axis="Number(kiosk.x_axis)" :kiosk-y-axis="Number(kiosk.y_axis)" :image="currentFloorPlanImage" />
        </div>
    </div>
</template>

<script setup lang="ts">
import MapPinVisibility from '@/components/kiosk/MapPinVisibility.vue';
import MapViewer from '@/components/kiosk/MapViewer.vue';
import { Button } from '@/components/ui/button';
import { FloorPlan } from '@/types/models/floor-plan';
import { Kiosk } from '@/types/models/kiosk';
import { Media } from '@/types/models/media';
import { useColorMode } from '@vueuse/core';
import { SearchIcon } from 'lucide-vue-next';
import { ref } from 'vue';

const mode = useColorMode({
    initialValue: 'light',
});
const props = defineProps<{
    kiosk: Kiosk & { located_at_floor_plan: FloorPlan & { media: Media[] } };
}>();

const currentFloorPlan = ref(props.kiosk.located_at_floor_plan_id);

const currentFloorPlanImage = ref(props.kiosk.located_at_floor_plan.media[0].original_url);
</script>
