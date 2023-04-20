<script setup lang="ts">
import { defineProps } from 'vue'
import UniqueID from '@/features/UniqueID'
import type BaseErrorMessegeVue from './BaseErrorMessege.vue';

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
    error: {
        type: String,
        default: ''
    },
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
}
</script>

<template>
    <label :for="uuid.toString()" v-if="label">{{ label }}</label>
    <input 
        v-bind="$attrs" 
        :value="modelValue" 
        :placeholder="label" 
        @input="updateModelValue($event)"
        class="field"
        :id="uuid.toString()"
        :aria-describedby="error ? `${uuid}-error` : ''"
        :aria-invalid="error ? true : false"
        :class="{ error }"
    >
    <BaseErrorMessege
        v-if="error"
        :id="`${uuid}-error`"
    >
    {{ error }}
    </BaseErrorMessege>
</template>