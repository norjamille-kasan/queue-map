<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import FormControl from '@/components/FormControl.vue';
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/vue3';
import { ArrowRight } from 'lucide-vue-next';
import { ref } from 'vue';

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
    x_axis: string;
    y_axis: string;
    floor_plan_id: number | null;
};

const form = useForm<Form>({
    name: '',
    x_axis: '',
    y_axis: '',
    floor_plan_id: null,
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

    console.log('Clicked at:', form.x_axis, form.y_axis);
}

const submit = () => {
    form.submit(dashboard.kiosks.store());
};
</script>

<template>
    <Head title="Create Kiosk" />
    <PageContent :breadcrumbs="breadcrumbs">
        <Card>
            <CardHeader>
                <CardTitle>Kiosk Information</CardTitle>
                <CardDescription> Fill all required fields to create kiosk account </CardDescription>
                <CardAction>
                    <Button form="createKioskForm" type="submit" v-if="form.isDirty" variant="outline" :disabled="form.processing">
                        Continue
                        <ArrowRight />
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form id="createKioskForm" @submit.prevent="submit" class="grid gap-4 sm:grid-cols-2">
                    <FormControl label="Kiosk Name" :error="form.errors.name" required>
                        <Input v-model="form.name" placeholder="e.g. Kiosk 1" type="text" />
                    </FormControl>
                </form>
            </CardContent>
        </Card>
    </PageContent>
</template>
