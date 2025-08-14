<template>
    <Button @click="isOpen = !isOpen" variant="outline" class="h-12 w-full justify-start font-mono text-xl font-semibold uppercase">
        <MapPinIcon v-if="!isOpen" class="size-8" />
        <MapPinOff v-else class="size-8" />
        <span v-if="!isOpen">Show Map Pin</span>
        <span v-else>Hide Map Pin</span>
    </Button>
</template>

<script setup lang="ts">
import { KioskSettings } from '@/enums/kiosk-settings';
import { useLocalStorage } from '@vueuse/core';
import { MapPinIcon, MapPinOff } from 'lucide-vue-next';
import { Button } from '../ui/button';

const isOpen = useLocalStorage(KioskSettings.MAP_PIN_VISIBILITY, false);
</script>
