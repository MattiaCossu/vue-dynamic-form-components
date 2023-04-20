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
        type: Boolean,
        default: false
    },
    error: {
        type: String,
        default: ''
    },
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.checked)
}
</script>

<template>
    <input 
        type="checkbox" 
        :checked="modelValue"
        @change="updateModelValue($event)"
        class="field" 
        :id="uuid.toString()"
    />
    <label :for="uuid.toString()" v-if="label">{{ label }}</label>
    <BaseErrorMessege
        v-if="error"
        :id="`${uuid}-error`"
    >
    {{ error }}
    </BaseErrorMessege>
</template>