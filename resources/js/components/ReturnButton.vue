<template>
    <Link :href="to" :class="buttonVariants({ variant: 'outline' })">
        <slot />
    </Link>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { buttonVariants } from './ui/button';

defineProps<{
    to: string;
}>();
</script>
