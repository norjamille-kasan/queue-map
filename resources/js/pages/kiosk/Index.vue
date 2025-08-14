<template>
    <PageContent>
        <template #header>
            <div class="flex items-center gap-4 p-2">
                <div class="flex items-center gap-2">
                    <MapPinned class="size-8" />
                    <h1 class="text-xl font-bold uppercase">{{ props.currentFloorPlan.name }}</h1>
                </div>
            </div>
        </template>
        <div class="flex w-full flex-col">
            <div class="mx-auto mt-10">
                <MapViewer
                    :destinations="props.destinations"
                    :kiosk-x-axis="Number(kiosk.x_axis)"
                    :kiosk-y-axis="Number(kiosk.y_axis)"
                    :image="currentFloorPlanImage"
                />
            </div>
        </div>
    </PageContent>
</template>

<script setup lang="ts">
import MapViewer from '@/components/kiosk/MapViewer.vue';
import PageContent from '@/components/kiosk/PageContent.vue';
import AppLayout from '@/layouts/kiosk/AppLayout.vue';
import { Destination } from '@/types/models/destination';
import { FloorPlan } from '@/types/models/floor-plan';
import { Kiosk } from '@/types/models/kiosk';
import { Media } from '@/types/models/media';
import { MapPinned } from 'lucide-vue-next';
import { ref } from 'vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps<{
    kiosk: Kiosk;
    currentFloorPlan: FloorPlan & { media: Media[] };
    destinations: Destination[];
}>();

const currentFloorPlanImage = ref(props.currentFloorPlan.media[0].original_url);
</script>
