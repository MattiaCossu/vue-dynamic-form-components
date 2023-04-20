<script setup lang="ts">
import Axios from 'axios'
import { useForm, useField } from 'vee-validate'
interface Event {
    category?: string,
    title?: string,
    description?: string,
    location?: string,
    pets?: number,
    extras?: {
        catering?: boolean,
        music?: boolean
    }
}

const categories = [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
]

const petOptions = [
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 }
]

//validateForm
const required = (value: string): boolean | string => {
    if (value === undefined || value === null) return 'This field is required'
    if (!value.length) return 'This field is required'
    return true
}
const minLenght = (value: string, length: number): boolean | string => {
    if (value.length < length) return 'Please enter at least ' + length + ' characters'
    return true
}
const anything = (): boolean => {
    return true
}

const validationSchema = {
    category: required as (value: string) => boolean | string,
    title: (value: string) => {
        const req = required(value) as boolean | string
        if (req !== true) return req 

        const min = minLenght(value, 3) as boolean | string
        if (min !== true) return min

        return true
    },
    description: required as (value: string) => boolean | string,
    location: required as (value: string) => boolean | string,
    pets: anything as (value: number) => boolean,
    'extras.catering': anything as (value: boolean) => boolean, 
    'extras.music': anything as (value: boolean) => boolean,
}

const { handleSubmit, errors, handleReset } = useForm<Event>({
    validationSchema,
    initialValues: {
        pets: 1,
        extras: {
            catering: false,
            music: false
        }
    }
})

const { value: category } = useField('category')
const { value: title } = useField('title')
const { value: description } = useField('description')
const { value: location } = useField('location')
const { value: pets } = useField('pets')
const { value: catering } = useField('extras.catering');
const { value: music } = useField('extras.music');

const submit = handleSubmit(values => {
    Axios.post(
        'https://jsonplaceholder.typicode.com/posts', 
        values as Event
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))

    resetForm()
})

const reset = () => {
    category.value = undefined
    title.value = undefined
    description.value = undefined
    location.value = undefined
    pets.value = 1
    catering.value = false
    music.value = false
}

const resetForm = () => {
    reset()
    handleReset()
}
</script>

<template>
    <div>
        <h1>Create an event</h1>
        <form @submit="submit">
            <BaseSelect 
                v-model="category" 
                label="Select a category" 
                :options="categories" 
                :error="errors.category"

            />
            <fieldset>
                <legend>Name & describe your event</legend>
                <BaseInput 
                    v-model="title" 
                    label="Title" 
                    type="text" 
                    :error="errors.title"
                />

                <BaseInput 
                    v-model="description"    
                    label="Description" 
                    type="text" 
                    :error="errors.description"
                />
            </fieldset>

            <fieldset>
            <legend>Where is your event?</legend>
            <BaseInput 
                v-model="location" 
                label="Location" 
                type="text" 
                :error="errors.location"
            />
            </fieldset>
            
            <fieldset>
                <legend>Are pets allowed?</legend>
                <div>
                    <BaseRadioGroup 
                        v-model="pets" 
                        :radioOptions="petOptions" 
                        name="pets" 
                        :vertical="false"
                    />
                </div>
            </fieldset>

            <fieldset>
                <legend>Extras</legend>
                <div>
                    <BaseCheckbox 
                        v-model="catering" 
                        label="Catering" 
                    />
                </div>
                <div>
                    <BaseCheckbox 
                        v-model="music" 
                        label="Live music" 
                    />
                </div>
            </fieldset>
            <BaseButton
            type="submit"
            class="-fill-gradient"
            something="else"
            >
                Submit
            </BaseButton>
        </form>
    </div>
</template>

<style scoped>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>
  
