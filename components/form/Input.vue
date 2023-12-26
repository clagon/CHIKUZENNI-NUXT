<template>
    <div class="input_wrapper">
        <label :for="id">{{ label }}<span class="required" v-if="isRequired">*</span></label>
        <input
            @change="onChange(inputValue)"
            :id="id"
            class="form_input"
            :type="isVisible ? 'text' : type"
            v-model="inputValue"
            :placeholder="placeholder ? placeholder : label"
            :autocomplete="autocomplete"
        />
        <div
            class="show"
            v-if="type == 'password'"
            tabindex="0"
            @keydown.space="togglePassVisibility()"
            @keydown.enter="togglePassVisibility()"
        >
            <span @click="togglePassVisibility()" class="material-symbols-outlined">
                {{ isVisible ? "visibility" : "visibility_off" }}
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    autocomplete: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        default: "text",
    },
    placeholder: {
        type: String,
        default: "",
    },
    isRequired: {
        type: Boolean,
        default: true,
    },
});
const emits = defineEmits();
const onChange = value => {
    emits("change", value);
};
const togglePassVisibility = () => {
    isVisible.value = !isVisible.value;
};
const inputValue = ref("");
const isVisible = ref(false);
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap",
        },
    ],
});
</script>

<style scoped>
.input_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
}
.required {
    margin-left: 5px;
    color: red;
}
.form_input {
    width: 240px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    padding: 0 10px;
    font-size: 16px;
    color: var(--black);
}
.form_input:focus {
    outline: none;
    border: 2px solid var(--primary);
}
.show {
    user-select: none;
    position: absolute;
    bottom: 6px;
    right: 8px;
    cursor: pointer;
}
</style>
