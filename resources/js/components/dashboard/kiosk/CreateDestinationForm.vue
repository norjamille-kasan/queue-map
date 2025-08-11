<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useForm } from '@inertiajs/vue3';

const model = defineModel<boolean>();
const props = defineProps<{
    xAxis: string;
    yAxis: string;
    kioskId: number;
}>();

const emit = defineEmits(['close']);

const form = useForm({
    x_axis: props.xAxis,
    y_axis: props.yAxis,
    kiosk_id: props.kioskId,
});
</script>

<template>
    <Dialog v-model:open="model">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription> Make changes to your profile here. Click save when you're done. </DialogDescription>
            </DialogHeader>
            <DialogFooter> Save changes </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
