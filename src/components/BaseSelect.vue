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
    options: {
        type: Array as () => Array<string | number>,
        required: true
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
    <select
        :value="modelValue"
        class="field"
        v-bind="{
            ...$attrs,
            onChange: (event) => updateModelValue(event)
        }"
        :id="uuid.toString()"
        :aria-describedby="error ? `${uuid}-error` : ''"
        :aria-invalid="error ? true : false"
        :class="{ error }"
    >
        <option 
            v-for="option in options" 
            :value="option" 
            :key="option" 
            :selected="option === modelValue">
            {{ option }}
        </option>
    </select>
    <BaseErrorMessege
            v-if="error"
            :id="`${uuid}-error`"
        >
        {{ error }}
    </BaseErrorMessege>
</template>