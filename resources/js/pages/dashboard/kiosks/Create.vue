<script setup lang="ts">
import FloorPlanMultiSelector from '@/components/dashboard/kiosk/FloorPlanMultiSelector.vue';
import PageContent from '@/components/dashboard/PageContent.vue';
import FormControl from '@/components/FormControl.vue';
import KioskLocationPin from '@/components/KioskLocationPin.vue';
import ReturnButton from '@/components/ReturnButton.vue';
import Spinner from '@/components/Spinner.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { type BreadcrumbItem } from '@/types';
import { FloorPlan } from '@/types/models/floor-plan';
import { Media } from '@/types/models/media';
import { Head, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';

const props = defineProps<{
    floorPlans: Array<FloorPlan & { media: Media[] }>;
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
        title: 'Create',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

type Form = {
    name: string;
    code: string;
    x_axis: string;
    y_axis: string;
    located_at_floor_plan_id: number | null;
    floor_plan_ids: number[];
};

const form = useForm<Form>({
    name: '',
    code: '',
    x_axis: '',
    y_axis: '',
    located_at_floor_plan_id: null,
    floor_plan_ids: [],
});

const imageRef = ref<HTMLImageElement | null>(null);

function handleSelectKioskPosition(event: MouseEvent) {
    if (!imageRef.value) return;

    const rect = imageRef.value.getBoundingClientRect();

    // get click position relative to image size
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // store as percentage so it scales responsively
    form.x_axis = (x * 100).toFixed(2);
    form.y_axis = (y * 100).toFixed(2);
}

const submit = () => {
    form.submit(dashboard.kiosks.store());
};

const previewLocationUrl = ref<string | null>();

watch(
    () => form.located_at_floor_plan_id,
    (value) => {
        if (value) {
            form.x_axis = '';
            form.y_axis = '';
            const floorPlan = props.floorPlans.find((floorPlan) => floorPlan.id === value);
            if (floorPlan) {
                previewLocationUrl.value = floorPlan.media[0].original_url;
            }
        }
    },
);
</script>

<template>
    <Head title="Create Kiosk" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-4xl">
            <form @submit.prevent="submit">
                <Card>
                    <CardHeader>
                        <CardTitle>Kiosk Information</CardTitle>
                        <CardDescription> Fill all required fields to create kiosk account </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-4">
                            <FormControl label="Kiosk Name" :error="form.errors.name" required>
                                <Input v-model="form.name" placeholder="e.g. Kiosk 1" type="text" />
                            </FormControl>
                            <FormControl
                                label="Code"
                                hint="It will be use to open the kiosk"
                                :error="form.errors.code"
                                help="Leave it blank if you want to generate a random code"
                            >
                                <Input v-model="form.code" placeholder="KIOSK-1234" type="text" />
                            </FormControl>
                            <FormControl
                                label="Floor Plans"
                                hint="Select which floor plans this kiosk will be able to navigate to"
                                required
                                :error="form.errors.floor_plan_ids"
                            >
                                <FloorPlanMultiSelector v-model="form.floor_plan_ids" :floor-plans="floorPlans" />
                            </FormControl>
                            <FormControl label="Floor Plan Location">
                                <Select v-model="form.located_at_floor_plan_id">
                                    <SelectTrigger class="w-full">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem v-for="floorPlan in floorPlans" :key="floorPlan.id" :value="floorPlan.id">
                                            {{ floorPlan.name }}
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <div>
                                <template v-if="previewLocationUrl">
                                    <div class="relative inline-block">
                                        <img
                                            ref="imageRef"
                                            class="max-h-[500px] cursor-crosshair ring-2 ring-primary"
                                            :src="previewLocationUrl"
                                            alt="floor plan"
                                            @click="handleSelectKioskPosition"
                                        />
                                        <KioskLocationPin
                                            v-if="form.x_axis && form.y_axis"
                                            :x-axis="Number(form.x_axis)"
                                            :y-axis="Number(form.y_axis)"
                                        />
                                    </div>
                                </template>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter class="space-x-2">
                        <ReturnButton :to="dashboard.kiosks.index().url"> Cancel </ReturnButton>
                        <Button type="submit" :loading="form.processing">
                            <Spinner :show="form.processing" />
                            Create Kiosk
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    </PageContent>
</template>
