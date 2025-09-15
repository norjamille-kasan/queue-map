<template>
    <PageContent>
        <div class="flex h-full w-full items-center justify-center rounded-lg bg-white/40 backdrop-blur-md">
            <div v-if="doneSetup" class="h-full w-full">
                <template v-for="item in floorPlans" :key="item.id">
                    <div v-if="item.id === showableFloorPlan" class="flex h-full flex-col items-center justify-center">
                        <MapViewer
                            :destinations="item.destinations"
                            :kiosk-x-axis="props.kiosk.located_at_floor_plan_id === item.id ? Number(props.kiosk.x_axis) : null"
                            :kiosk-y-axis="props.kiosk.located_at_floor_plan_id === item.id ? Number(props.kiosk.y_axis) : null"
                            :image="item.media[0].original_url"
                        />
                        <div v-if="kioskState.currentTextDirection.value" class="rounded-t-lg bg-white p-2 sm:w-3xl sm:max-w-3xl">
                            <h1 v-for="(destination, index) in kioskState.currentTextDirection.value" :key="index">
                                <h1>{{ destination }}</h1>
                            </h1>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </PageContent>
</template>

<script setup lang="ts">
import MapViewer from '@/components/kiosk/MapViewer.vue';
import PageContent from '@/components/kiosk/PageContent.vue';
import { DB_KEYS, useIndexDb } from '@/composables/useIndexDb';
import { getKioskVersionKey } from '@/composables/useKioskSetting';
import AppLayout from '@/layouts/kiosk/AppLayout.vue';
import { useKioskState } from '@/stores/kioskStore';
import { Destination } from '@/types/models/destination';
import { FloorPlan } from '@/types/models/floor-plan';
import { Kiosk } from '@/types/models/kiosk';
import { Media } from '@/types/models/media';
import { $fetch } from 'ofetch';
import { computed, onMounted, ref } from 'vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps<{
    kiosk: Kiosk;
    currentFloorPlan: FloorPlan & { media: Media[] };
    kioskVersionKey: string;
}>();

const doneSetup = ref(false);

const kioskState = useKioskState();

const showableFloorPlan = computed(() => {
    if (kioskState.selectedFloorPlanId.value) {
        return kioskState.selectedFloorPlanId.value;
    }
    return props.kiosk.located_at_floor_plan_id;
});

interface FloorPlanWithDestinations extends FloorPlan {
    destinations: Destination[];
    media: Media[];
}
const floorPlans = ref<FloorPlanWithDestinations[]>([]);

onMounted(async () => {
    kioskState.currentFloorPlanId.value = props.kiosk.located_at_floor_plan_id;
    await bootstrap();
});

const bootstrap = async () => {
    kioskState.selectedFloorPlanId.value = props.kiosk.located_at_floor_plan_id;
    const INSTALLED_VERSION = await useIndexDb.getItem(DB_KEYS.KIOSK_VERSION_KEY);
    if (!INSTALLED_VERSION) {
        console.log('Installing first kiosk version....');
        await useIndexDb.setItem(DB_KEYS.KIOSK_INFORMATION, props.kiosk);
        await useIndexDb.setItem(DB_KEYS.KIOSK_VERSION_KEY, getKioskVersionKey(props.kiosk.id, props.kiosk.version));
        await loadFloorPlans(props.kiosk.id);
    } else {
        console.log('Version already installed!!!!');
        if (INSTALLED_VERSION === props.kioskVersionKey) {
            console.log('Version verified :', INSTALLED_VERSION);
            console.log('Loading existing floor plans and destinations');
        }
        if (INSTALLED_VERSION !== props.kioskVersionKey) {
            console.log('Version changed, reloading floor plans and destinations');
            await loadFloorPlans(props.kiosk.id);
        }
    }
    const _floorPlans = await useIndexDb.getItem<FloorPlanWithDestinations[]>(DB_KEYS.KIOSK_FLOOR_PLANS);
    const _destinations = await useIndexDb.getItem(DB_KEYS.KIOSK_DESTINATIONS);
    if (!_floorPlans || !_destinations) {
        await loadFloorPlans(props.kiosk.id);
    } else {
        floorPlans.value = _floorPlans;
    }
    doneSetup.value = true;
};
const loadFloorPlans = async (kioskId: number) => {
    try {
        console.log('Loading floor plans and destinations');
        const data = await $fetch<FloorPlanWithDestinations[]>('/api/kiosks/' + kioskId + '/floor-plans');
        await useIndexDb.setItem(DB_KEYS.KIOSK_FLOOR_PLANS, data);
        const destinations = data.flatMap((floorPlan) => floorPlan.destinations);
        await useIndexDb.setItem(DB_KEYS.KIOSK_DESTINATIONS, destinations);
    } catch (error) {
        alert('Error loading floor plans');
    }
};
</script>
