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
import { Head, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';

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
        title: 'Create',
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
    name: '',
    image: null,
});

const floorPlanPreview = computed(() => {
    if (!form.image) return null;
    return URL.createObjectURL(form.image);
});

const submit = () => {
    form.submit(dashboard.floorPlans.store());
};
</script>

<template>
    <Head title="Create Floor Plan" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="mx-auto max-w-4xl">
            <form @submit.prevent="submit" class="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle> Add Floor Plan </CardTitle>
                        <CardDescription> Fill all required fields to create floor plan </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div class="grid gap-4">
                            <FormControl label="Name" :error="form.errors.name" required>
                                <Input type="text" v-model="form.name" placeholder="e.g. 1st Floor" />
                            </FormControl>
                            <FormControl label="Floor Plan Image" :error="form.errors.image" required>
                                <Input type="file" @input="form.image = $event.target.files[0]" />
                            </FormControl>
                        </div>
                    </CardContent>
                    <CardFooter class="space-x-2">
                        <ReturnButton :to="dashboard.floorPlans.index().url"> Cancel </ReturnButton>
                        <Button type="submit" :disabled="form.processing">
                            <Spinner :show="form.processing" />
                            Save
                        </Button>
                    </CardFooter>
                </Card>
                <div v-if="floorPlanPreview" class="space-y-2">
                    <h3 class="text-lg font-semibold">Floor Plan Preview</h3>
                    <img :src="floorPlanPreview" alt="floor plan" class="ring-2 ring-primary" />
                </div>
            </form>
        </div>
    </PageContent>
</template>
