<template>
    <AppContent variant="sidebar" class="overflow-x-hidden">
        <AppSidebarHeader :breadcrumbs="breadcrumbs" />
        <div class="space-y-6 px-4 py-6">
            <slot />
        </div>
    </AppContent>
</template>

<script setup lang="ts">
import { BreadcrumbItemType } from '@/types';
import AppContent from '../AppContent.vue';
import AppSidebarHeader from '../AppSidebarHeader.vue';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
</script>
