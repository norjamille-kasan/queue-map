<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { openKiosk } from '@/routes';
import { useForm } from '@inertiajs/vue3';
import { MonitorIcon, TriangleAlert } from 'lucide-vue-next';
import InputError from '../InputError.vue';
import Spinner from '../Spinner.vue';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const form = useForm({
    code: '',
});

const submit = () => {
    form.submit(openKiosk());
};
</script>

<template>
    <Dialog>
        <DialogTrigger as-child>
            <Button class="w-full">
                <MonitorIcon />
                OPEN AS KIOSK
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle> OPEN KIOSK </DialogTitle>
                <DialogDescription> Enter the kiosk code to open the kiosk </DialogDescription>
            </DialogHeader>
            <form @submit.prevent="submit" id="loginKiosk">
                <Input v-model="form.code" type="text" placeholder="e.g KIOSK-123" />
                <div v-if="form.errors.code" class="mt-1 flex items-center gap-1">
                    <TriangleAlert class="text-red-500" />
                    <InputError :message="form.errors.code" />
                </div>
            </form>
            <DialogFooter>
                <Button type="submit" form="loginKiosk" class="w-full" :disabled="form.processing">
                    <Spinner :show="form.processing" />
                    LOGIN
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
