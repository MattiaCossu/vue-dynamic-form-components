<script setup lang="ts">
import { defineProps } from 'vue'
import UniqueID from '@/features/UniqueID'

const uuid = UniqueID().getID()

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type: [String, Number],
        default: ''
    },
    value: {
        type: [String, Number],
        required: true
    }
})
</script>

<template>
<input 
    type="radio" 
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    :id="uuid.toString()"
/>
<label :for="uuid.toString()" v-if="label">{{ label }}</label>
</template>