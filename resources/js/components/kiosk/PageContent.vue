<template>
    <SidebarInset>
        <div class="relative flex flex-1 flex-col gap-4 bg-gradient-to-br from-blue-700 via-blue-300 to-blue-600 p-4">
            <slot></slot>
        </div>
    </SidebarInset>
</template>

<script setup lang="ts">
import { SidebarInset } from '../ui/sidebar';
</script>
