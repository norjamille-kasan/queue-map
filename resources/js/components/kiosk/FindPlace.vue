<script setup lang="ts">
import AlertSound from '@/assets/alert-sound.mp3';
import PressSound from '@/assets/press-sound.mp3';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { DB_KEYS, useIndexDb } from '@/composables/useIndexDb';
import { useKioskState } from '@/stores/kioskStore';
import { Destination } from '@/types/models/destination';
import { FloorPlan } from '@/types/models/floor-plan';
import { Media } from '@/types/models/media';
import { useSound } from '@vueuse/sound';
import { SearchIcon } from 'lucide-vue-next';
import { ref, watch } from 'vue';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import KioskKeyboard from './KioskKeyboard.vue';

const pressSound = useSound(PressSound, {
    volume: 0.3,
});

const alertSound = useSound(AlertSound, {
    volume: 0.1,
});

const open = ref(false);

interface FloorPlanWithDestinations extends FloorPlan {
    destinations: Destination[];
    media: Media[];
}

function handleOpenChange() {
    pressSound.play();
    open.value = !open.value;
}
const filteredDestinations = ref<Destination[]>([]);
const destinations = ref<Destination[] | null>([]);
const floorPlans = ref<FloorPlanWithDestinations[] | null>([]);

const loadDestinations = async () => {
    try {
        const data = await useIndexDb.getItem<Destination[]>(DB_KEYS.KIOSK_DESTINATIONS);
        const _fp = await useIndexDb.getItem<FloorPlanWithDestinations[]>(DB_KEYS.KIOSK_FLOOR_PLANS);
        destinations.value = data;
        if (data) {
            filteredDestinations.value = data?.sort((a, b) => a.name.localeCompare(b.name));
        }
        if (_fp) {
            floorPlans.value = _fp;
            console.log(floorPlans.value);
        }
    } catch (error) {
        alert('Error loading floor plans');
    }
};

const search = ref('');

const onChange = (value: string): void => {
    search.value = value;
};
const onKeyPress = (button: string): void => {
    pressSound.play();
};

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

const selectDestination = (destinationId: number, floorPlanId: number, textDirection: string[] | null) => {
    isOpen.value = false;
    kioskState.selectedDestinationid.value = destinationId;
    kioskState.selectedFloorPlanId.value = floorPlanId;
    kioskState.currentTextDirection.value = textDirection;
    alertSound.play();
};

watch(open, async () => {
    if (open.value && filteredDestinations.value.length === 0) {
        await loadDestinations();
    }
});
</script>

<template>
    <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
            <Button @click="handleOpenChange" class="h-12 w-full justify-start rounded-none font-mono text-xl font-semibold">
                <SearchIcon class="size-8" />
                FIND PLACE
            </Button>
        </SheetTrigger>
        <SheetContent side="bottom" class="h-[100%] sm:max-h-[100%]">
            <SheetHeader class="mr-10">
                <Input v-model="search" class="search-input h-12" placeholder="Search" autofocus="false" />
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
            </SheetHeader>
            <div v-if="search.length > 0" class="mb-72 grid gap-4 overflow-scroll p-5 sm:grid-cols-2">
                <template v-for="destination in filteredDestinations" :key="destination.id">
                    <Button
                        @click="selectDestination(destination.id, destination.floor_plan_id, destination.text_redirection)"
                        variant="secondary"
                        size="lg"
                        class="text-md relative h-16 overflow-hidden border wrap-break-word"
                    >
                        <div class="absolute top-0 left-0 bg-primary px-2 text-white">
                            {{ floorPlans?.find((fp) => fp.id === destination.floor_plan_id)?.name }}
                        </div>
                        {{ destination.name }}
                    </Button>
                </template>
            </div>
            <div v-else class="mb-72 grid gap-4 overflow-scroll p-5">
                <template v-for="fp in floorPlans" :key="fp.id">
                    <div>
                        <div class="my-2 bg-primary px-2 text-white">
                            <h1 class="text-lg font-semibold uppercase">{{ fp.name }}</h1>
                        </div>
                        <div class="grid grid-cols-2 gap-4">
                            <template v-for="destination in fp.destinations" :key="destination.id">
                                <Button
                                    @click="selectDestination(destination.id, destination.floor_plan_id, destination.text_redirection)"
                                    variant="secondary"
                                    size="lg"
                                    class="text-md h-16 border wrap-break-word"
                                >
                                    {{ destination.name }}
                                </Button>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
            <div class="absolute bottom-0 flex w-full items-center">
                <div class="mx-auto w-5xl max-w-5xl">
                    <KioskKeyboard :input="search" @onChange="onChange" @onKeyPress="onKeyPress" />
                </div>
            </div>
        </SheetContent>
    </Sheet>
</template>
