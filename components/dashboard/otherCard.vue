<template>
    <li class="other_card" @click="onClick">
        <span class="status_color" :style="'--status_color:' + color"></span>
        <p class="status_message">{{ status }}</p>
    </li>
</template>

<script setup>
const props = defineProps({
    status: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
const emits = defineEmits();
const onClick = () => {
    emits("click", {
        status: props.status,
        color: props.color,
    });
};
</script>
<style scoped>
.status_message {
    font-size: 24px;
    font-weight: 700;
    color: #f1f3f5;
}
.other_card {
    font-family: "Poppins", sans-serif;
    position: relative;
    width: 100%;
    aspect-ratio: 3/1;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.status_color {
    --width: 15px;
    width: var(--width);
    aspect-ratio: 1;
    border-radius: 9999px;
    position: absolute;
    top: calc(50% - calc(var(--width) / 2));
    left: 30px;
    background-color: var(--status_color);
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
}
</style>
