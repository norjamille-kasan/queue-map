// store.ts
import { createGlobalState } from '@vueuse/core';
import { shallowRef } from 'vue';

export const useKioskState = createGlobalState(() => {
    const selectedFloorPlanId = shallowRef<null | number>(null);
    const selectedDestinationid = shallowRef<null | number>(null);
    const currentFloorPlanId = shallowRef<null | number>(null);

    return {
        selectedFloorPlanId,
        selectedDestinationid,
        currentFloorPlanId,
    };
});
