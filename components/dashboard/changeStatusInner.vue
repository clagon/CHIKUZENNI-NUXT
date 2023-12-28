<script setup>
const modalStore = useModalStore();
const statusStore = useStatusStore();
const scrollableStore = useScrollableStore();
const onClickOpen = () => {
    modalStore.open();
    scrollableStore.set(false);
};
</script>
<template>
    <div class="currentStatus">
        <div
            class="status_color"
            :style="{ '--status_color': statusStore.currentStatus.color }"
        ></div>
        <div class="status_text">{{ statusStore.currentStatus.status }}</div>
        <button class="status_button" @click="onClickOpen">変更する</button>
        <button class="status_open">
            <span class="material-symbols-outlined" @click="onClickOpen"> expand_more </span>
        </button>
    </div>
</template>
<style scoped>
.currentStatus {
    padding: 20px;
    width: min(400px, 95%);
    height: 100px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    display: grid;
    grid-template-columns: 50px 2fr minmax(110px, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: "status_color status_text status_button";
}
.status_color {
    grid-area: status_color;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--status_color);
    align-self: center;
    justify-self: center;
}
.status_text {
    grid-area: status_text;
    font-size: 20px;
    font-weight: 700;
    color: var(--black);
    align-self: center;
    justify-self: self-start;
    padding-left: 20px;
    text-wrap: nowrap;
    white-space: nowrap;
}
.status_button {
    grid-area: status_button;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 700;
    background-color: var(--primary);
    color: var(--smoke-white);
    align-self: center;
    justify-self: center;
}
.status_button:active {
    filter: brightness(0.9);
}
.status_open {
    display: none;
    justify-self: self-end;
    margin-right: 20px;
}
.status_open:hover {
    filter: brightness(0.9);
}
.status_open:active {
    filter: brightness(0.8);
}
.status_open > span {
    display: block;
    font-size: 30px;
    border-radius: 9999px;
    width: 30px;
    transform: translateY(3px);
}
.status_open > span:hover {
    background-color: #0003;
}
.status_open > span:active {
    background-color: #0004;
}
@media (max-width: 768px) {
    .status_button {
        display: none;
    }
    .status_open {
        display: block;
    }
}
</style>
