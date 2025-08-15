<script setup lang="ts">
import AlertSound from '@/assets/alert-sound.mp3';
import PressSound from '@/assets/press-sound.mp3';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DB_KEYS, useIndexDb } from '@/composables/useIndexDb';
import { useKioskState } from '@/stores/kioskStore';
import { Destination } from '@/types/models/destination';
import { useSound } from '@vueuse/sound';
import { SearchIcon } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const pressSound = useSound(PressSound, {
    volume: 0.3,
});

const alertSound = useSound(AlertSound, {
    volume: 0.1,
});

const open = ref(false);

function handleOpenChange() {
    pressSound.play();
    open.value = !open.value;
}
const filteredDestinations = ref<Destination[]>([]);
const destinations = ref<Destination[] | null>([]);

const loadDestinations = async () => {
    try {
        const data = await useIndexDb.getItem<Destination[]>(DB_KEYS.KIOSK_DESTINATIONS);
        destinations.value = data;
        if (data) {
            filteredDestinations.value = data?.sort((a, b) => a.name.localeCompare(b.name));
        }
    } catch (error) {
        alert('Error loading floor plans');
    }
};

const search = ref('');

const handleSearch = () => {
    const data = destinations.value?.filter((destination) => destination.name.toLowerCase().includes(search.value.toLowerCase()));
    if (data) {
        filteredDestinations.value = data?.sort((a, b) => a.name.localeCompare(b.name));
    }
};

watch(search, handleSearch);

const emit = defineEmits(['select']);

const isOpen = ref(false);

const kioskState = useKioskState();

const selectDestination = (destinationId: number, floorPlanId: number) => {
    isOpen.value = false;
    kioskState.selectedDestinationid.value = destinationId;
    kioskState.selectedFloorPlanId.value = floorPlanId;
    alertSound.play();
};

watch(open, async () => {
    if (open.value && filteredDestinations.value.length === 0) {
        console.log('Loading destinations');
        await loadDestinations();
    }
});
</script>

<template>
    <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
            <Button @click="handleOpenChange" class="h-12 w-full justify-start font-mono text-xl font-semibold">
                <SearchIcon class="size-8" />
                FIND PLACE
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" class="h-[90%] sm:max-h-[90%]">
            <SheetHeader class="mr-10">
                <Input v-model="search" class="h-12" placeholder="Search" autofocus="false" />
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <div class="grid gap-4 overflow-scroll p-5 sm:grid-cols-2">
                <template v-for="destination in filteredDestinations" :key="destination.id">
                    <Button
                        @click="selectDestination(destination.id, destination.floor_plan_id)"
                        variant="secondary"
                        size="lg"
                        class="text-md h-16 border wrap-break-word"
                    >
                        {{ destination.name }} {{ destination.name }}
                    </Button>
                </template>
            </div>
        </SheetContent>
    </Sheet>
</template>
