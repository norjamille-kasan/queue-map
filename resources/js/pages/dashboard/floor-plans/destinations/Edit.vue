<script setup lang="ts">
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import TextDirectionInput from '@/components/dashboard/floor-plans/TextDirectionInput.vue';
import FormControl from '@/components/FormControl.vue';
import Spinner from '@/components/Spinner.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    text_redirection: props.destination.text_redirection || [],
});

const submit = () => {
    form.submit(dashboard.floorPlans.destinations.update({ floor_plan: props.floorPlan.id, destination: props.destination.id }), {
        preserveScroll: true,
        onSuccess: () => modal.value.close(),
    });
};

const newTextRedirection = ref<string>('');
</script>

<template>
    <HeadlessModal ref="modal" v-slot="{ isOpen, setOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogContent class="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle> Edit Destination </DialogTitle>
                    <DialogDescription> Make changes to your destination here. </DialogDescription>
                </DialogHeader>
                <form id="editDestinationForm" @submit.prevent="submit" class="space-y-4">
                    <FormControl label="Name" :error="form.errors.name" required>
                        <Input type="text" v-model="form.name" placeholder="e.g. Entrance" />
                    </FormControl>
                    <FormControl label="Text Direction" :error="form.errors.text_redirection">
                        <div class="flex items-center gap-2">
                            <Textarea type="text" v-model="newTextRedirection" />
                            <Button
                                type="button"
                                variant="outline"
                                @click="
                                    () => {
                                        form.text_redirection.push(newTextRedirection);
                                        newTextRedirection = '';
                                    }
                                "
                            >
                                Save
                            </Button>
                        </div>
                    </FormControl>
                    <TextDirectionInput v-model="form.text_redirection" />
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
