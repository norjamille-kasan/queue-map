<script setup lang="ts">
// @ts-ignore
import { HeadlessModal } from '@inertiaui/modal-vue';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ref } from 'vue';
const modal = ref<any>(null);

function closeModal() {
    modal.value.close();
}
</script>

<template>
    <HeadlessModal ref="modal" v-slot="{ isOpen, setOpen }">
        <Dialog :open="isOpen" @update:open="setOpen($event)">
            <DialogTrigger> Edit Profile </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription> Make changes to your profile here. Click save when you're done. </DialogDescription>
                </DialogHeader>
                <DialogFooter> Save changes </DialogFooter>
            </DialogContent>
        </Dialog>
    </HeadlessModal>
</template>
