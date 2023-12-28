<script setup>
import { DashboardChangeStatusModal } from "#components";
import { markRaw } from "vue";
const NonReactiveComponent = markRaw(DashboardChangeStatusModal);
const modalStore = useModalStore();
const statusStore = useStatusStore();
const scrollableStore = useScrollableStore();
const onClickOpen = () => {
    modalStore.open();
    scrollableStore.set(false);
};
const {
    data: statusFetched,
    pending,
    error,
    refresh,
} = await customApi("https://chikuzenni-mock-api.vercel.app/teacherStatus");
onMounted(async () => {
    await refresh();
    if (error.value) alert(error.value);
    statusStore.set(statusFetched.value.currentStatus);
    modalStore.setComponent(NonReactiveComponent, "smol");
});
</script>
<template>
    <div class="currentStatus">
        <div
            class="status_color"
            :style="{ '--status_color': statusStore.currentStatus.color }"
        ></div>
        <div class="status_text">{{ statusStore.currentStatus.status }}</div>
        <button class="status_button" @click="onClickOpen">変更する</button>
        <button class="status_open" @click="onClickOpen">
            <span class="material-symbols-outlined"> expand_more </span>
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
    justify-content: center;
    align-items: center;
    height: 100%;
    aspect-ratio: 1;
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
    /* width: 30px; */
    width: 100%;
    transform: translateY(3px);
}
.status_open > span:hover {
    background-color: #0003;
}
.status_open > span:active {
    background-color: #0004;
}
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .status_button {
        display: none;
    }
    .status_open {
        display: flex;
    }
}
</style>
