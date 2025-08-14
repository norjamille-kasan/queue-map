<script setup lang="ts">
import type { SidebarProps } from '@/components/ui/sidebar';
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { formatDate } from '@vueuse/core';
import { CalendarIcon } from 'lucide-vue-next';
import { Separator } from '../ui/separator';
import FindPlace from './FindPlace.vue';
import MapPinVisibility from './MapPinVisibility.vue';

const props = defineProps<SidebarProps>();
</script>

<template>
    <Sidebar v-bind="props">
        <SidebarHeader class="border-b">
            <div class="flex items-center gap-2">
                <CalendarIcon class="size-8" />
                <h1 class="text-xl font-bold uppercase">
                    {{ formatDate(new Date(), 'MMMM d , YYYY') }}
                </h1>
            </div>
        </SidebarHeader>
        <SidebarContent class="p-2">
            <ul class="space-y-2">
                <li>
                    <FindPlace />
                </li>
                <li>
                    <Separator />
                </li>
                <li>
                    <h1 class="text-lg font-semibold uppercase">Controls</h1>
                </li>

                <li>
                    <MapPinVisibility />
                </li>
            </ul>
        </SidebarContent>
        <SidebarRail />
    </Sidebar>
</template>
