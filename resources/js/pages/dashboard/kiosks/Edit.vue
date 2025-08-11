<script setup lang="ts">
import CreateDestinationForm from '@/components/dashboard/kiosk/CreateDestinationForm.vue';
import PageContent from '@/components/dashboard/PageContent.vue';
import FloorPlanPin from '@/components/FloorPlanPin.vue';
import FormControl from '@/components/FormControl.vue';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { User, type BreadcrumbItem } from '@/types';
import { Destination } from '@/types/models/destination';
import { Kiosk } from '@/types/models/kiosk';
import { Head, useForm } from '@inertiajs/vue3';
import { ArrowRight, MapPin, MapPinned, RefreshCcw } from 'lucide-vue-next';
import { computed, ref } from 'vue';
const props = defineProps<{
    kiosk: Kiosk & { floor_plan: string; user: Pick<User, 'name'> };
    destinations: Destination[];
}>();
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
    {
        title: 'Kiosk',
        href: dashboard.kiosks.index().url,
    },
    {
        title: 'Edit',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

type Form = {
    name: string;
    x_axis: string;
    y_axis: string;
    floor_plan: File | null;
};

const kioskEditForm = useForm<Form>({
    floor_plan: null,
    name: props.kiosk.name,
    x_axis: props.kiosk.x_axis,
    y_axis: props.kiosk.y_axis,
});

const floorPlanPreview = computed(() => {
    if (!kioskEditForm.floor_plan) return null;
    return URL.createObjectURL(kioskEditForm.floor_plan);
});

const imageRef = ref<HTMLImageElement | null>(null);

const selectedAxis = ref({
    x: '',
    y: '',
});

function handleSelectKioskPosition(event: MouseEvent) {
    if (!imageRef.value) return;

    const rect = imageRef.value.getBoundingClientRect();

    // get click position relative to image size
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // store as percentage so it scales responsively
    selectedAxis.value.x = (x * 100).toFixed(2);
    selectedAxis.value.y = (y * 100).toFixed(2);

    console.log('Clicked at:', selectedAxis.value.x, selectedAxis.value.y);
}

const selectAsKioskPosition = () => {
    kioskEditForm.x_axis = selectedAxis.value.x;
    kioskEditForm.y_axis = selectedAxis.value.y;
};

const showCreateDestinationForm = ref(false);
const selectAsNewDestination = () => {
    showCreateDestinationForm.value = true;
};
</script>

<template>
    <Head title="Edit Kiosk" />
    <PageContent :breadcrumbs="breadcrumbs">
        <Card>
            <CardHeader>
                <CardTitle>
                    {{ props.kiosk.name }}
                </CardTitle>
                <CardDescription> Click 'Save Changes' to update kiosk information </CardDescription>
                <CardAction class="space-x-2">
                    <Button
                        @click="kioskEditForm.reset('x_axis', 'y_axis')"
                        v-if="kioskEditForm.x_axis !== props.kiosk.x_axis || kioskEditForm.y_axis !== props.kiosk.y_axis"
                        variant="outline"
                        :disabled="kioskEditForm.processing"
                    >
                        Reset Kiosk Position
                        <RefreshCcw />
                    </Button>
                    <Button v-if="kioskEditForm.isDirty" variant="outline" :disabled="kioskEditForm.processing">
                        Continue
                        <ArrowRight />
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div class="grid gap-4 sm:grid-cols-2">
                    <FormControl label="Kiosk Name" :error="kioskEditForm.errors.name" required>
                        <Input v-model="kioskEditForm.name" placeholder="e.g. Kiosk 1" type="text" />
                    </FormControl>
                    <FormControl
                        label="Floor Plan"
                        :error="kioskEditForm.errors.floor_plan"
                        help="Upload a floor plan image. Leave it blank if you don't want to change it"
                    >
                        <Input
                            :disabled="props.destinations.length > 0"
                            @input="kioskEditForm.floor_plan = $event.target.files[0]"
                            placeholder="e.g. Kiosk 1"
                            accept="image/*"
                            type="file"
                        />
                    </FormControl>
                </div>
                <div class="relative mt-4 inline-block">
                    <ContextMenu>
                        <ContextMenuTrigger as-child>
                            <img
                                ref="imageRef"
                                class="min:h-[500px] h-[500px] max-w-full cursor-pointer"
                                :src="floorPlanPreview ?? props.kiosk.floor_plan"
                                alt="floor plan"
                                @contextmenu="handleSelectKioskPosition"
                            />
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                            <ContextMenuItem @click="selectAsKioskPosition">
                                <MapPin />
                                Select As Kiosk Position
                            </ContextMenuItem>
                            <ContextMenuItem @click="selectAsNewDestination">
                                <MapPinned />
                                Create New Destination
                            </ContextMenuItem>
                        </ContextMenuContent>
                    </ContextMenu>

                    <FloorPlanPin
                        class="fill-red-500 text-red-300"
                        v-if="kioskEditForm.x_axis && kioskEditForm.y_axis"
                        :x-axis="Number(kioskEditForm.x_axis)"
                        :y-axis="Number(kioskEditForm.y_axis)"
                    />
                    <FloorPlanPin v-for="destination in destinations" :x-axis="Number(destination.x_axis)" :y-axis="Number(destination.y_axis)" />
                </div>
            </CardContent>
        </Card>
        <CreateDestinationForm :kiosk-id="kiosk.id" :x-axis="selectedAxis.x" :y-axis="selectedAxis.y" v-model="showCreateDestinationForm" />
    </PageContent>
</template>
