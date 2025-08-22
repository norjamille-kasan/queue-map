<template>
    <div :class="keyboardClass"></div>
</template>

<script setup lang="ts">
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';
import { onMounted, ref, watch } from 'vue';

interface Props {
    keyboardClass?: string;
    input?: string;
}

const props = withDefaults(defineProps<Props>(), {
    keyboardClass: 'simple-keyboard',
});

const emit = defineEmits<{
    (e: 'onChange', input: string): void;
    (e: 'onKeyPress', button: string): void;
}>();

const keyboard = ref<Keyboard | null>(null);

const handleShift = () => {
    if (!keyboard.value) return;
    const currentLayout = keyboard.value.options.layoutName;
    const shiftToggle = currentLayout === 'default' ? 'shift' : 'default';

    keyboard.value.setOptions({
        layoutName: shiftToggle,
    });
};

const onChange = (input: string) => {
    emit('onChange', input);
};

const onKeyPress = (button: string) => {
    emit('onKeyPress', button);
    if (button === '{shift}' || button === '{lock}') {
        handleShift();
    }
};

onMounted(() => {
    keyboard.value = new Keyboard(props.keyboardClass, {
        onChange,
        onKeyPress,
    });
});

watch(
    () => props.input,
    (newInput) => {
        if (keyboard.value && newInput !== undefined) {
            keyboard.value.setInput(newInput);
        }
    },
);
</script>

<style scoped>
.simple-keyboard {
    max-width: 100% !important;
}
</style>
