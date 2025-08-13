<template>
    <div class="flex h-screen max-h-screen flex-col bg-white">
        <div class="mx-auto mt-10">
            <MapViewer
                :kiosk-x-axis="Number(kiosk.x_axis)"
                :kiosk-y-axis="Number(kiosk.y_axis)"
                :image="kiosk.located_at_floor_plan.media[0].original_url"
            />
        </div>
        <div class="absolute bottom-5 flex w-full items-center justify-center">
            <ShimmerButton class="shadow-2xl" shimmer-size="2px">
                <SearchIcon class="text-white" />
                <span
                    class="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-white lg:text-lg dark:from-white dark:to-slate-900/10"
                >
                    FIND PLACE
                </span>
            </ShimmerButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import MapViewer from '@/components/kiosk/MapViewer.vue';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { FloorPlan } from '@/types/models/floor-plan';
import { Kiosk } from '@/types/models/kiosk';
import { Media } from '@/types/models/media';
import { SearchIcon } from 'lucide-vue-next';

const props = defineProps<{
    kiosk: Kiosk & { located_at_floor_plan: FloorPlan & { media: Media[] } };
}>();
</script>
