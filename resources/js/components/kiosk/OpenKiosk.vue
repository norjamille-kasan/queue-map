<script setup lang="ts">
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { openKiosk } from '@/routes';
import { useForm } from '@inertiajs/vue3';
import { MonitorIcon } from 'lucide-vue-next';
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
