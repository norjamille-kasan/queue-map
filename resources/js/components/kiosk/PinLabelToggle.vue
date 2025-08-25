<template>
    <Button @click="click" variant="outline" class="h-12 w-full justify-start font-mono text-xl font-semibold uppercase">
        <EyeClosed v-if="!isOpen" class="size-8" />
        <EyeIcon v-else class="size-8" />
        <span>Pin Label</span>
    </Button>
</template>

<script setup lang="ts">
import PressSound from '@/assets/press-sound.mp3';
import { KioskSettings } from '@/enums/kiosk-settings';
import { useLocalStorage } from '@vueuse/core';
import { useSound } from '@vueuse/sound';
import { EyeClosed, EyeIcon } from 'lucide-vue-next';
import { Button } from '../ui/button';

const click = () => {
    pressSound.play();
    isOpen.value = !isOpen.value;
};

const pressSound = useSound(PressSound, {
    volume: 0.3,
});

const isOpen = useLocalStorage(KioskSettings.PIN_LABEL_VISIBILITY, false);
</script>
