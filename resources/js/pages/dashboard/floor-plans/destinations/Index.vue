<script setup lang="ts">
import CreateDestination from '@/components/dashboard/floor-plans/CreateDestination.vue';
import PageContent from '@/components/dashboard/PageContent.vue';
import FloorPlanPin from '@/components/FloorPlanPin.vue';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { type BreadcrumbItem } from '@/types';
import { Destination } from '@/types/models/destination';
import { FloorPlan } from '@/types/models/floor-plan';
import { Head, router } from '@inertiajs/vue3';
import { EditIcon, PinIcon, TrashIcon } from 'lucide-vue-next';
import { ref } from 'vue';
const props = defineProps<{
    floorPlan: FloorPlan & { image: string };
    destinations: Destination[];
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
    {
        title: 'Floor Plans',
        href: dashboard.floorPlans.index().url,
    },
    {
        title: props.floorPlan.name,
        href: dashboard.floorPlans.show(props.floorPlan.id).url,
    },
    {
        title: 'Destinations',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

const showCreateDestination = ref(false);

const imageRef = ref<HTMLImageElement | null>(null);

const location = ref({
    x: '',
    y: '',
});

function handleSelectPinPosition(event: MouseEvent) {
    if (!imageRef.value) return;
    const rect = imageRef.value.getBoundingClientRect();

    // get click position relative to image size
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // store as percentage so it scales responsively
    location.value.x = (x * 100).toFixed(2);
    location.value.y = (y * 100).toFixed(2);

    if (pinnedDestination.value) {
        router.put(
            dashboard.destinations.axis.update(pinnedDestination.value).url,
            {
                x_axis: location.value.x,
                y_axis: location.value.y,
            },
            {
                preserveScroll: true,
            },
        );
    } else {
        showCreateDestination.value = true;
    }
}

const pinnedDestination = ref<number | null>();
</script>

<template>
    <Head title="Manage Floor Plan Destinations" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="grid gap-4 sm:grid-cols-12">
            <div class="space-y-2 sm:col-span-7">
                <div class="relative inline-block">
                    <img
                        ref="imageRef"
                        class="h-[1000px] max-h-[1000px] max-w-full cursor-crosshair ring-2 ring-primary"
                        :src="floorPlan.image"
                        alt="floor plan"
                        @click="handleSelectPinPosition"
                    />

                    <FloorPlanPin
                        :class="pinnedDestination === destination.id ? 'animate-pulse fill-red-500 text-red-300' : ''"
                        v-for="destination in destinations"
                        :destination="destination"
                        :x-axis="Number(destination.x_axis)"
                        :y-axis="Number(destination.y_axis)"
                    />
                </div>
            </div>
            <div class="sm:col-span-5">
                <div class="grid grid-cols-2 gap-2">
                    <template v-for="destination in destinations">
                        <div class="flex items-center justify-between rounded-lg border bg-card p-2">
                            <div class="flex items-center gap-2">
                                <button
                                    @click="pinnedDestination === destination.id ? (pinnedDestination = null) : (pinnedDestination = destination.id)"
                                >
                                    <PinIcon class="size-4" :class="pinnedDestination === destination.id ? 'text-primary' : ''" />
                                </button>
                                <h1>
                                    {{ destination.name }}
                                </h1>
                            </div>
                            <div class="flex items-center gap-2">
                                <ModalLink
                                    :href="dashboard.floorPlans.destinations.edit({ floor_plan: floorPlan.id, destination: destination.id }).url"
                                >
                                    <EditIcon class="size-4" />
                                </ModalLink>
                                <button>
                                    <TrashIcon class="size-4 text-destructive" />
                                </button>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <CreateDestination v-model="showCreateDestination" :floor-plan-id="floorPlan.id" :x-axis="location.x" :y-axis="location.y" />
    </PageContent>
</template>
