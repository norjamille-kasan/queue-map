<script setup lang="ts">
import FormControl from '@/components/FormControl.vue';
import Spinner from '@/components/Spinner.vue';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import dashboard from '@/routes/dashboard';
import { useForm } from '@inertiajs/vue3';

const model = defineModel<boolean>();

const props = defineProps<{
    xAxis: string;
    yAxis: string;
    floorPlanId: number;
}>();

const form = useForm({
    name: '',
    x_axis: props.xAxis,
    y_axis: props.yAxis,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        x_axis: props.xAxis,
        y_axis: props.yAxis,
    })).submit(dashboard.floorPlans.destinations.store(props.floorPlanId), {
        preserveScroll: true,
        onSuccess: () => {
            model.value = false;
            form.reset();
        },
    });
};
</script>

<template>
    <Dialog v-model:open="model">
        <DialogContent>
            <DialogHeader>
                <DialogTitle> Add Destination </DialogTitle>
                <DialogDescription> Add a new destination to the floor plan. </DialogDescription>
            </DialogHeader>
            <form id="createDestinationForm" @submit.prevent="submit" class="gap-4">
                <FormControl label="Name" :error="form.errors.name" required>
                    <Input type="text" v-model="form.name" placeholder="e.g. Entrance" />
                </FormControl>
            </form>
            <DialogFooter>
                <Button variant="outline" type="button" @click="model = false">Cancel</Button>
                <Button type="submit" form="createDestinationForm" :disabled="form.processing">
                    <Spinner :show="form.processing" />
                    Save
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
