<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
</script>

<template>
    <p 
        aria-live="assertive" 
        class="errorMessage" 
        :id="id"
    >
        <slot />
    </p>
</template>
  
