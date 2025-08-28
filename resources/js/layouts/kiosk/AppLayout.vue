<script setup lang="ts">
import AppSidebar from '@/components/kiosk/Sidebar.vue';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useColorMode } from '@vueuse/core';

const mode = useColorMode({
    initialValue: 'light',
});

mode.value = 'light';
</script>

<template>
    <SidebarProvider>
        <slot></slot>
        <AppSidebar side="right" />
    </SidebarProvider>
</template>
