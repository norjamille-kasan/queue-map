<script setup lang="ts">
import AppLayout from '@/components/dashboard/AppSidebarLayout.vue';
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();
</script>

<template>
    <AppLayout>
        <slot />
    </AppLayout>
</template>
