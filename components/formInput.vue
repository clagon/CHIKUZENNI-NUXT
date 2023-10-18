<template>
    <div class="input_wrapper">
        <label for="input">{{ label }}<span class="required" v-if="isRequired">*</span></label>
        <input  @change="onChange(inputValue)" id="input" class="form_input" :type="type" v-model="inputValue" :placeholder="placeholder?placeholder:label" />
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: 'text',
    },
    placeholder: {
        type: String,
        default: '',
    },
    isRequired: {
        type: Boolean,
        default: true,
    },
})
const emits = defineEmits()
const onChange = value => {
    emits('change', value)
}
const inputValue = ref('')
</script>

<style scoped>
.input_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.required{
    margin-left: 5px;
    color: red;
}
.form_input{
    width: 240px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    padding: 0 10px;
    font-size: 16px;
    color: var(--black);
}
.form_input:focus{
    outline: none;
    border: 2px solid var(--primary);
}
</style>