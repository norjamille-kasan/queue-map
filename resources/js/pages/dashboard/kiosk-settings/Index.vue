<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { Paginated, User, type BreadcrumbItem } from '@/types';
import { KioskSettings } from '@/types/models/kiosk-settings';
import { Head } from '@inertiajs/vue3';
import { formatDate } from '@vueuse/core';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
    {
        title: 'Kiosk settings',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

const props = defineProps<{
    kioskSettings: Paginated<KioskSettings & { user: Pick<User, 'name'> }>;
}>();
</script>

<template>
    <Head title="Kiosk settings" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <div>
                <Input class="sm:w-80" />
            </div>
            <div>
                <Button>New Kiosk</Button>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg border">
            <Table>
                <TableHeader class="bg-muted/40">
                    <TableRow>
                        <TableHead> Name </TableHead>
                        <TableHead> Floor Plan</TableHead>
                        <TableHead> Last Updated</TableHead>
                        <TableHead class="text-right"> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="kioskSetting in props.kioskSettings.data">
                        <TableCell class="font-medium">
                            {{ kioskSetting.user.name }}
                        </TableCell>
                        <TableCell>
                            <button class="text-primary underline">Show Image</button>
                        </TableCell>
                        <TableCell>
                            {{ formatDate(new Date(kioskSetting.updated_at), ' YYYY MMM DD h:mm a') }}
                        </TableCell>
                        <TableCell class="text-right"> </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </PageContent>
</template>
