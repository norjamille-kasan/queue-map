<script setup lang="ts">
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import FormControl from '@/components/FormControl.vue';
import Spinner from '@/components/Spinner.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import dashboard from '@/routes/dashboard';
import { Destination } from '@/types/models/destination';
import { FloorPlan } from '@/types/models/floor-plan';
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
const modal = ref<any>(null);

const props = defineProps<{
    destination: Destination;
    floorPlan: FloorPlan;
}>();

const form = useForm({
    name: props.destination.name,
});

const submit = () => {
    form.submit(dashboard.floorPlans.destinations.update({ floor_plan: props.floorPlan.id, destination: props.destination.id }), {
        preserveScroll: true,
        onSuccess: () => modal.value.close(),
    });
};
</script>

<template>
    <HeadlessModal ref="modal" v-slot="{ isOpen, setOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle> Edit Destination </DialogTitle>
                    <DialogDescription> Make changes to your destination here. </DialogDescription>
                </DialogHeader>
                <form id="editDestinationForm" @submit.prevent="submit" class="gap-4">
                    <FormControl label="Name" :error="form.errors.name" required>
                        <Input type="text" v-model="form.name" placeholder="e.g. Entrance" />
                    </FormControl>
                </form>
                <DialogFooter>
                    <Button variant="outline" type="button" @click="setOpen(false)">Cancel</Button>
                    <Button type="submit" form="editDestinationForm" :disabled="form.processing">
                        <Spinner :show="form.processing" />
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </HeadlessModal>
</template>
