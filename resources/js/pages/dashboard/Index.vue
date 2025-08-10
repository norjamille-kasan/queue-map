<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/vue3';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
];
defineOptions({
    layout: AppLayout,
});
</script>

<template>
    <Head title="Dashboard" />
    <PageContent :breadcrumbs="breadcrumbs"> </PageContent>
</template>
