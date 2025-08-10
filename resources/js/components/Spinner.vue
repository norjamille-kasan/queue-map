<template>
    <LoaderIcon v-if="show" class="animate-spin" />
</template>

<script setup lang="ts">
import { LoaderIcon } from 'lucide-vue-next';
defineProps<{
    show: boolean;
}>();
</script>
