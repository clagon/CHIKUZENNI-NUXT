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
const emits = defineEmits(["click"]);
const onClick = e => {
    console.log("emitted");

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
    color: var(--black);
}
li.other_card {
    position: relative;
    width: 100%;
    aspect-ratio: 3/1;
    background-color: var(--smoke-white);
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #e5e7eb;
}
.other_card:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.other_card:hover {
    background-color: var(--primary);
    border: none;
    border-top: 1px solid #e5e7eb;
}
.other_card:hover .status_message {
    color: var(--smoke-white);
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
    /* box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2); */
}
</style>
