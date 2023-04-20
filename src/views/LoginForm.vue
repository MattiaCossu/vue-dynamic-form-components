<script setup lang="ts">
import { useField, useForm } from 'vee-validate'

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

useForm({
    validationSchema: validation
})

const { value: emailValue, errorMessage: emailError } = useField('email')
const { value: passwordValue, errorMessage: passwordError } = useField('password')
</script>

<template>
    <form @submit.prevent="onSubmit">
        <BaseInput 
            label="Email" 
            type="email" 
            v-model="emailValue"
            :error="emailError"
        />

        <BaseInput 
            label="Password" 
            type="password" 
            v-model="passwordValue"
            :error="passwordError"
        />

        <BaseButton 
            type="submit" 
            class="-fill-gradient"
        >
            Submit
        </BaseButton>
    </form>
</template>