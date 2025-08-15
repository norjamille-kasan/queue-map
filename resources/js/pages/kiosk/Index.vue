<template>
    <PageContent>
        <template #header>
            <div class="flex items-center gap-4 p-2">
                <div class="flex items-center gap-2">
                    <Link href="/">
                        <MapPinned class="size-8" />
                    </Link>
                    <h1 class="text-xl font-bold uppercase">KIOSK LOCATION - {{ props.currentFloorPlan.name }}</h1>
                </div>
            </div>
        </template>
        <div class="flex w-full flex-col">
            <div v-if="doneSetup" class="mt-10">
                <template v-for="item in floorPlans" :key="item.id">
                    <div v-if="item.id === showableFloorPlan" class="flex justify-center">
                        <div>
                            <div class="m-3 bg-primary p-2 text-primary-foreground">
                                <h1>{{ item.name }}</h1>
                            </div>
                        </div>
                        <MapViewer
                            :destinations="item.destinations"
                            :kiosk-x-axis="props.kiosk.located_at_floor_plan_id === item.id ? Number(props.kiosk.x_axis) : null"
                            :kiosk-y-axis="props.kiosk.located_at_floor_plan_id === item.id ? Number(props.kiosk.y_axis) : null"
                            :image="item.media[0].original_url"
                        />
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
import { Link } from '@inertiajs/vue3';
import { MapPinned } from 'lucide-vue-next';
import { $fetch } from 'ofetch';
import { computed, onMounted, ref } from 'vue';

defineOptions({
    layout: AppLayout,
});

const props = defineProps<{
    kiosk: Kiosk;
    currentFloorPlan: FloorPlan & { media: Media[] };
    destinations: Destination[];
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
