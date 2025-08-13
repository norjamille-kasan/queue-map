<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox';
import { FloorPlan } from '@/types/models/floor-plan';
const model = defineModel<number[] | null>();
const props = defineProps<{
    floorPlans: FloorPlan[];
}>();
</script>

<template>
    <div class="grid grid-cols-2 gap-4">
        <template v-for="floorPlan in props.floorPlans" :key="floorPlan.id">
            <div class="flex items-center space-x-2 rounded-lg border p-2">
                <Checkbox
                    :id="`floor-plan-${floorPlan.id}`"
                    :model-value="model?.includes(floorPlan.id)"
                    @update:model-value="model = $event ? [...(model || []), floorPlan.id] : model?.filter((id) => id !== floorPlan.id)"
                />
                <label
                    :for="`floor-plan-${floorPlan.id}`"
                    class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {{ floorPlan.name }}
                </label>
            </div>
        </template>
    </div>
</template>
