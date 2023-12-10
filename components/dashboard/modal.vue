<script setup>
const modal = useModalStore();
const scroll = useScrollableStore();
const onClickClose = () => {
    modal.close();
    scroll.set(true);
};
</script>
<template>
    <div class="change_modal">
        <slot></slot>
        <div class="close" @click="onClickClose">
            <span class="material-symbols-outlined"> close </span>
        </div>
    </div>
</template>
<style scoped>
.change_modal {
    position: relative;
    min-width: 450px;
    min-height: 300px;
    background-color: var(--white);
    border-radius: 10px;
    padding: 30px;
}
.close {
    position: absolute;
    border-radius: 8px;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--white);
    filter: brightness(0.95);
}
.close:hover {
    filter: brightness(0.9);
}
</style>
