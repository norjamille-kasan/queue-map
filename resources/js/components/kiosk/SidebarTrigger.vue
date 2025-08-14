<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ChevronsRight } from 'lucide-vue-next';
import type { HTMLAttributes } from 'vue';
import { useSidebar } from '../ui/sidebar';

const props = defineProps<{
    class?: HTMLAttributes['class'];
}>();

const { toggleSidebar, state } = useSidebar();
</script>

<template>
    <Button data-sidebar="trigger" data-slot="sidebar-trigger" variant="ghost" size="icon" :class="cn('h-7 w-7', props.class)" @click="toggleSidebar">
        <ChevronsRight :class="state === 'expanded' ? 'rotate-180' : ''" class="size-8" />
        <span class="sr-only">Toggle Sidebar</span>
    </Button>
</template>
