<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { handleError } from 'vue';

function onSubmit() {
    alert('Submitted')
}

const validation = {
    email: (value: string) => {
        if (!value) return 'Email is required'

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regex.test((value).toLowerCase())) return 'Please enter a valid email address'

        return true
    },
    password: (value: string) => {
        const requiredMessage = 'Password is required'
        if (value === undefined || value === null) return requiredMessage
        if (!value.length) return requiredMessage

        return true
    }
}

const {errors} = useForm({
    validationSchema: validation
})

const { value: email, handleChange } = useField('email')
const { value: password } = useField('password')
</script>

<template>
    <form @submit.prevent="onSubmit">
        <BaseInput 
            label="Email" 
            type="email" 
            :modelValue="email"
            :error="errors.email"
            @change="handleChange"
        />

        <BaseInput 
            label="Password" 
            type="password" 
            v-model="password"
            :error="errors.password"
        />

        <BaseButton 
            type="submit" 
            class="-fill-gradient"
        >
            Submit
        </BaseButton>
    </form>
</template>