<template>
    <Button @click="isOpen = !isOpen" size="icon" variant="outline" class="h-12 font-mono text-2xl font-semibold has-[>svg]:px-6">
        <MapPinIcon v-if="!isOpen" class="size-8" />
        <MapPinOff v-else class="size-8" />
    </Button>
</template>

<script setup lang="ts">
import { KioskSettings } from '@/enums/kiosk-settings';
import { useLocalStorage } from '@vueuse/core';
import { MapPinIcon, MapPinOff } from 'lucide-vue-next';
import { Button } from '../ui/button';

const isOpen = useLocalStorage(KioskSettings.MAP_PIN_VISIBILITY, false);
</script>
