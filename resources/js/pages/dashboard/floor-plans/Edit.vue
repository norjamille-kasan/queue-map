<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import FormControl from '@/components/FormControl.vue';
import ReturnButton from '@/components/ReturnButton.vue';
import Spinner from '@/components/Spinner.vue';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { type BreadcrumbItem } from '@/types';
import { FloorPlan } from '@/types/models/floor-plan';
import { Head, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps<{
    floorPlan: FloorPlan & { image: string };
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
        href: '#',
    },
    {
        title: 'Edit',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

type TForm = {
    name: string;
    image: File | null;
};

const form = useForm<TForm>({
    name: props.floorPlan.name,
    image: null,
});

const floorPlanPreview = computed(() => {
    if (!form.image) return null;
    return URL.createObjectURL(form.image);
});

const submit = () => {
    form.submit(dashboard.floorPlans.update(props.floorPlan.id), {
        preserveScroll: true,
    });
};
</script>

<template>
    <Head title="Edit Floor Plan" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-4xl">
            <form @submit.prevent="submit" class="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle> Edit - "{{ floorPlan.name }}" </CardTitle>
                        <CardDescription> Click 'Save Changes' to update floor plan information </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-4">
                            <FormControl label="Name" :error="form.errors.name" required>
                                <Input type="text" v-model="form.name" placeholder="e.g. 1st Floor" />
                            </FormControl>
                            <FormControl label="Floor Plan Image" :error="form.errors.image" help="Leave it blank if you don't want to change it">
                                <Input type="file" @input="form.image = $event.target.files[0]" />
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardFooter class="space-x-2">
                        <ReturnButton :to="dashboard.floorPlans.index().url"> Cancel </ReturnButton>
                        <Button type="submit" :disabled="form.processing || !form.isDirty">
                            <Spinner :show="form.processing" />
                            Save Changes
                        </Button>
                    </CardFooter>
                </Card>
                <div v-if="floorPlanPreview || props.floorPlan.image" class="space-y-2">
                    <h3 class="text-lg font-semibold">Floor Plan Preview</h3>
                    <img :src="floorPlanPreview || props.floorPlan.image" alt="floor plan" class="max-h-[800px] ring-2 ring-primary" />
                </div>
            </form>
        </div>
    </PageContent>
</template>
