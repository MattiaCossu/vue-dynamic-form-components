<script setup lang="ts">
import { defineProps } from 'vue';

interface RadioOption {
    label: string;
    value: string | number;
}

const props = defineProps({
    radioOptions: {
        type: Array as () => Array<RadioOption>,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    modelValue: {
        type: [String, Number],
        required: true
    },
    vertical: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <component
        v-for="option in radioOptions"
        :key="option.value"
        :is="vertical ? 'div' : 'span'"
        :class="{
            horizontal: !vertical,
        }"
    >
        <BaseRadio 
            :label="option.label"
            :value="option.value"
            :modelValue="modelValue"
            :name="name"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
    </component>
</template>

<style scoped>
.horizontal {
    margin-right: 20px;
}
</style>