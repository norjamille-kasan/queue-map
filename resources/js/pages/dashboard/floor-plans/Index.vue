<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { Paginated, type BreadcrumbItem } from '@/types';
import { FloorPlan } from '@/types/models/floor-plan';
import { Head, Link } from '@inertiajs/vue3';
import { formatDate } from '@vueuse/core';
import { PlusIcon } from 'lucide-vue-next';

const props = defineProps<{
    floorPlans: Paginated<FloorPlan>;
}>();
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
    {
        title: 'Floor Plans',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});
</script>

<template>
    <Head title="Floor Plans" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <div>
                <Input class="sm:w-80" />
            </div>
            <div>
                <Link :href="dashboard.floorPlans.create().url" :class="buttonVariants()">
                    <PlusIcon />
                    New Floor Plan
                </Link>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg border">
            <Table>
                <TableHeader class="bg-muted/40">
                    <TableRow>
                        <TableHead> Name </TableHead>
                        <TableHead> Last Updated</TableHead>
                        <TableHead class="text-right"> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="floorPlan in props.floorPlans.data">
                        <TableCell class="font-medium">
                            {{ floorPlan.name }}
                        </TableCell>
                        <TableCell>
                            {{ formatDate(new Date(floorPlan.updated_at), ' YYYY MMM DD h:mm a') }}
                        </TableCell>
                        <TableCell class="text-right"> </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </PageContent>
</template>
