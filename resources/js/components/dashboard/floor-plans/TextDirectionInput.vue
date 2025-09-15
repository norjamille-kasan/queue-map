<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useSortable } from '@vueuse/integrations/useSortable';
import { TrashIcon } from 'lucide-vue-next';
import { shallowRef, useTemplateRef } from 'vue';

const data = defineModel<string[]>();

const el = useTemplateRef<HTMLElement>('el');
const list = shallowRef(data);

const { option } = useSortable(el, list, {
    animation: 150,
});

const deleteItem = (index: number) => {
    list.value.splice(index, 1);
};
</script>

<template>
    <div ref="el" class="m-auto flex flex-col gap-2">
        <div v-for="(item, index) in list" :key="`${item}-index`" class="flex items-center justify-between rounded bg-gray-500/5 px-3 py-1">
            <h1>{{ item }}</h1>
            <Button type="button" @click="deleteItem(index)" size="icon" variant="outline">
                <TrashIcon class="text-destructive" />
            </Button>
        </div>
    </div>
</template>
