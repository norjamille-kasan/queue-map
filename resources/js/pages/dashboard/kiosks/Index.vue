<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import PageContent from '@/components/dashboard/PageContent.vue';
import Pagination from '@/components/Pagination.vue';
import TextHelp from '@/components/TextHelp.vue';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import { cn } from '@/lib/utils';
import dashboard from '@/routes/dashboard';
import { Paginated, User, type BreadcrumbItem } from '@/types';
import { Kiosk } from '@/types/models/kiosk';
import { Head, Link, router } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { Edit2Icon, PlusIcon, TrashIcon } from 'lucide-vue-next';
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

const confirmDeleteKiosk = useConfirmDialog();

const deleteKiosk = async (floorPlanId: number) => {
    const { isCanceled } = await confirmDeleteKiosk.reveal();
    if (!isCanceled) {
        router.delete(dashboard.kiosks.destroy(floorPlanId).url);
    }
};
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
                                <div :class="cn('size-2 rounded-full', kiosk.is_active ? 'bg-blue-500' : 'bg-red-500')"></div>
                                {{ kiosk.is_active ? 'Active' : 'Inactive' }}
                            </Badge>
                        </TableCell>
                        <TableCell>
                            {{ formatDate(new Date(kiosk.updated_at), ' YYYY MMM DD h:mm a') }}
                        </TableCell>
                        <TableCell class="text-right">
                            <div class="-my-1 flex justify-end gap-1">
                                <TextHelp text="Edit Floor Plan">
                                    <Link :href="dashboard.kiosks.edit(kiosk.id)" :class="buttonVariants({ variant: 'outline', size: 'icon' })">
                                        <Edit2Icon />
                                    </Link>
                                </TextHelp>
                                <TextHelp text="Delete Kiosk">
                                    <Button @click="deleteKiosk(kiosk.id)" size="icon" variant="outline">
                                        <TrashIcon class="text-red-600" />
                                    </Button>
                                </TextHelp>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        <Pagination :links="props.kiosks.links" />
        <ConfirmDialog :open="confirmDeleteKiosk.isRevealed.value" @cancel="confirmDeleteKiosk.cancel" @confirm="confirmDeleteKiosk.confirm" />
    </PageContent>
</template>
