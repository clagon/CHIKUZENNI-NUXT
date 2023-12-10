<script setup>
const modal = useModalStore();
const statusStore = useStatusStore();
const scroll = useScrollableStore();
const onClickOpen = () => {
    modal.open();
    scroll.set(false);
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
    </div>
</template>
<style scoped>
.currentStatus {
    padding: 20px;
    width: 400px;
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
}
.status_button {
    grid-area: status_button;
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 700;
    background-color: var(--primary);
    color: var(--white);
    align-self: center;
    justify-self: center;
}
.status_button:active {
    filter: brightness(0.9);
}
</style>
