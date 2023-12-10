<script setup>
const statusStore = useStatusStore();
const props = defineProps({
    status: {
        type: Object,
        required: true,
    },

    isSelected: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["click"]);
const onClick = () => {
    emit("click", props.status);
};
</script>
<template>
    <div class="status_content" :class="{ selected: isSelected }" @click="onClick">
        <div class="status_color" :style="'--status_color:' + status.color"></div>
        <div class="status_text">{{ status.status }}</div>
    </div>
</template>
<style scoped>
.status_content {
    width: 100%;
    height: 80px;
    border: 1px solid var(--gray);
    border-radius: 8px;
    display: grid;
    grid-template-columns: 50px 3fr;
    grid-template-rows: 1fr;
    grid-template-areas: "status_color status_text";
    cursor: pointer;
}
.status_content.selected {
    border: 2px solid var(--primary);
    box-shadow: 0 0 3px var(--primary);
}
.status_color {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--status_color);
    align-self: center;
    justify-self: center;
}
.status_text {
    font-size: 20px;
    font-weight: 700;
    color: var(--black);
    align-self: center;
    justify-self: self-start;
}
</style>
