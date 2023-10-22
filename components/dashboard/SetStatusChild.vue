<template>
    <li class="change-status-child">
        <p class="status_name">{{ name }}</p>
        <input
            class="status_input"
            type="text"
            v-model="currentValue"
            :disabled="!isChecked"
            @change="onChange"
        />
        <FormToggle class="toggle" @click="onClick" />
    </li>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    setkey: {
        type: String,
        required: true,
    },
});
const currentValue = ref(props.value);
const emits = defineEmits(["change"]);
const onChange = e => {
    emits("change", currentValue.value, props.setkey);
};
const onClick = value => {
    isChecked.value = value;
};
const isChecked = ref(false);
</script>
<style scoped>
.change-status-child {
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.status_name {
    font-size: 18px;
    font-weight: 700;
    color: var(--black);
    margin-right: 20px;
}

.status_input {
    border-radius: 8px;
    background-color: #fff;
    padding: 20px 30px;
    border: 1px solid #e5e7eb;
    width: 70%;
}
.status_input[disabled] {
    background-color: var(--white);
    color: var(--gray);
}
.toggle {
    margin-left: 10px;
}
</style>
