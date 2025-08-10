<script setup lang="ts">
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/dashboard/AppSidebar.vue';
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <slot></slot>
    </AppShell>
</template>
