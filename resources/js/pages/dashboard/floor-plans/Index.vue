<script setup lang="ts">
import ConfirmDialog from '@/components/ConfirmDialog.vue';
import PageContent from '@/components/dashboard/PageContent.vue';
import Pagination from '@/components/Pagination.vue';
import TextHelp from '@/components/TextHelp.vue';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableEmpty, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/dashboard/AppLayout.vue';
import dashboard from '@/routes/dashboard';
import { Paginated, type BreadcrumbItem } from '@/types';
import { FloorPlan } from '@/types/models/floor-plan';
import { Head, Link, router } from '@inertiajs/vue3';
import { formatDate, useConfirmDialog } from '@vueuse/core';
import { Edit2Icon, MapPinPlus, PlusIcon, TrashIcon } from 'lucide-vue-next';
import { toRef } from 'vue';

const props = defineProps<{
    floorPlans: Paginated<FloorPlan>;
    filter: {
        name: string;
    };
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

const confirmDeleteFloorPlan = useConfirmDialog();

const deleteFloorPlan = async (floorPlanId: number) => {
    const { isCanceled } = await confirmDeleteFloorPlan.reveal();
    if (!isCanceled) {
        router.delete(dashboard.floorPlans.destroy(floorPlanId).url);
    }
};

const query = toRef(props.filter);

const search = () => {
    router.reload({
        data: {
            filter: query.value,
        },
        replace: true,
    });
};
</script>

<template>
    <Head title="Floor Plans" />
    <PageContent :breadcrumbs="breadcrumbs">
        <div class="flex items-center justify-between gap-2">
            <form @submit.prevent="search">
                <Input class="sm:w-80" v-model="query.name" placeholder="Search by name" />
            </form>
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
                        <TableCell>
                            <div class="-my-1 flex justify-end gap-1">
                                <TextHelp text="Manage Destinations">
                                    <Link
                                        :href="dashboard.floorPlans.destinations.index(floorPlan.id)"
                                        :class="buttonVariants({ variant: 'outline', size: 'icon' })"
                                    >
                                        <MapPinPlus />
                                    </Link>
                                </TextHelp>
                                <TextHelp text="Edit Floor Plan">
                                    <Link
                                        :href="dashboard.floorPlans.edit(floorPlan.id)"
                                        :class="buttonVariants({ variant: 'outline', size: 'icon' })"
                                    >
                                        <Edit2Icon />
                                    </Link>
                                </TextHelp>
                                <TextHelp text="Delete Floor Plan">
                                    <Button @click="deleteFloorPlan(floorPlan.id)" size="icon" variant="outline">
                                        <TrashIcon class="text-red-600" />
                                    </Button>
                                </TextHelp>
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableEmpty v-if="props.floorPlans.data.length === 0" :colspan="100">
                        <span class="text-muted-foreground">No floor plans found.</span>
                    </TableEmpty>
                </TableBody>
            </Table>
        </div>
        <Pagination :links="props.floorPlans.links" />
        <ConfirmDialog
            :open="confirmDeleteFloorPlan.isRevealed.value"
            @cancel="confirmDeleteFloorPlan.cancel"
            @confirm="confirmDeleteFloorPlan.confirm"
        />
    </PageContent>
</template>
