<script setup lang="ts">
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/components/ui/sheet';
import { SearchIcon } from 'lucide-vue-next';
import { ref } from 'vue';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const open = ref(false);

function handleOpenChange() {
    open.value = !open.value;
}
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button @click="handleOpenChange" class="h-12 w-full justify-start font-mono text-xl font-semibold">
                <SearchIcon class="size-8" />
                FIND PLACE
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" class="h-[90%] sm:max-h-[90%]">
            <SheetHeader class="mr-10">
                <Input placeholder="Search" autofocus="false" />
            </SheetHeader>
        </SheetContent>
    </Sheet>
</template>
