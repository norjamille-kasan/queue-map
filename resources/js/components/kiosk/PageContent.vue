<template>
    <SidebarInset>
        <!-- <header class="flex h-16 shrink-0 items-center gap-2 px-4">
            <slot name="header"></slot>
            <SidebarTrigger class="-mr-1 ml-auto rotate-180" />
        </header> -->
        <div class="flex flex-1 flex-col gap-4 bg-gradient-to-br from-blue-700 via-blue-300 to-blue-600 p-4">
            <slot></slot>
        </div>
    </SidebarInset>
</template>

<script setup lang="ts">
import { SidebarInset } from '../ui/sidebar';
</script>
