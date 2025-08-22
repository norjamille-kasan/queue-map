<script setup lang="ts">
import ErrorSound from '@/assets/error-sound.mp3';
import type { SidebarProps } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { useKioskState } from '@/stores/kioskStore';
import { formatDate } from '@vueuse/core';
import { useSound } from '@vueuse/sound';
import { CalendarIcon, RefreshCcw } from 'lucide-vue-next';
import { computed } from 'vue';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import FindPlace from './FindPlace.vue';
import MapPinVisibility from './MapPinVisibility.vue';
import PinLabelToggle from './PinLabelToggle.vue';

const errorSound = useSound(ErrorSound, {
    volume: 0.1,
});

const props = defineProps<SidebarProps>();

const kioskState = useKioskState();

const resetSelection = () => {
    errorSound.play();
    kioskState.selectedDestinationid.value = null;
    kioskState.selectedFloorPlanId.value = null;
};

const hasFilter = computed(() => {
    return kioskState.selectedDestinationid.value || kioskState.selectedFloorPlanId.value;
});
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader class="border-b">
            <div class="flex items-center gap-2">
                <CalendarIcon class="size-8" />
                <h1 class="text-lg font-bold uppercase">
                    {{ formatDate(new Date(), 'MMMM D , YYYY') }}
                </h1>
            </div>
        </SidebarHeader>
        <SidebarContent class="bg-primary/20 p-2">
            <ul class="space-y-2">
                <li>
                    <Suspense>
                        <FindPlace />
                        <template #fallback>
                            <p>Loading...</p>
                        </template>
                    </Suspense>
                </li>
                <li>
                    <Separator />
                </li>
                <li>
                    <h1 class="text-lg font-semibold uppercase">Controls</h1>
                </li>
                <li>
                    <MapPinVisibility />
                </li>
                <li>
                    <PinLabelToggle />
                </li>
                <li v-if="hasFilter">
                    <Button
                        variant="outline"
                        class="h-12 w-full justify-start font-mono text-xl font-semibold text-destructive uppercase hover:text-destructive"
                        @click="resetSelection"
                    >
                        <RefreshCcw class="size-8 text-destructive" />
                        RESET
                    </Button>
                </li>
            </ul>
            <SidebarFooter class="mt-auto">
                <Button variant="secondary" @click="kioskState.selectedFloorPlanId.value = null" class="h-12 text-2xl"> Where Am I </Button>
            </SidebarFooter>
        </SidebarContent>
        <SidebarRail />
    </Sidebar>
</template>
