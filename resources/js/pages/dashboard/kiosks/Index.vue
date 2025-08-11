<script setup lang="ts">
import PageContent from '@/components/dashboard/PageContent.vue';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import { cn } from '@/lib/utils';
import dashboard from '@/routes/dashboard';
import { Paginated, User, type BreadcrumbItem } from '@/types';
import { Kiosk } from '@/types/models/kiosk';
import { Head, Link } from '@inertiajs/vue3';
import { formatDate } from '@vueuse/core';
import { PlusIcon } from 'lucide-vue-next';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard.index().url,
    },
    {
        title: 'Kiosk',
        href: '#',
    },
];
defineOptions({
    layout: AppLayout,
});

const props = defineProps<{
    kiosks: Paginated<Kiosk & { user: Pick<User, 'name'> }>;
}>();
</script>

<template>
    <Head title="Kiosk" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <div>
                <Input class="sm:w-80" />
            </div>
            <div>
                <Link :href="dashboard.kiosks.create().url" :class="buttonVariants()">
                    <PlusIcon />
                    New Kiosk
                </Link>
            </div>
        </div>
        <div class="overflow-hidden rounded-lg border">
            <Table>
                <TableHeader class="bg-muted/40">
                    <TableRow>
                        <TableHead> Name </TableHead>
                        <TableHead> Code </TableHead>
                        <TableHead> Status</TableHead>
                        <TableHead> Last Updated</TableHead>
                        <TableHead class="text-right"> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="kiosk in props.kiosks.data">
                        <TableCell class="font-medium">
                            {{ kiosk.user.name }}
                        </TableCell>
                        <TableCell>
                            <Badge variant="secondary"> {{ kiosk.code }}</Badge>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline">
                                <div :class="cn('size-2 rounded-full', kiosk.is_active ? 'bg-green-500' : 'bg-red-500')"></div>
                                {{ kiosk.is_active ? 'Active' : 'Inactive' }}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            {{ formatDate(new Date(kiosk.updated_at), ' YYYY MMM DD h:mm a') }}
                        </TableCell>
                        <TableCell class="text-right"> </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </PageContent>
</template>
