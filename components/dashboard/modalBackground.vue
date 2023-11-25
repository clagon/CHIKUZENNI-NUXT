<script setup>
const modal = useModalStore();
const style = computed(() => {
    return {
        display: modal.isOpen ? "flex" : "none",
    };
});

// モーダルの外側をクリックしたらモーダルを閉じる
const background = ref(null);
onMounted(() => {
    background.value.addEventListener("click", e => {
        if (e.target == background.value && !modal.isOpen.value) modal.close();
    });
});
</script>
<template>
    <div class="modal_background" :style="style" ref="background">
        <DashboardChangeStatusModal />
    </div>
</template>
<style scoped>
.modal_background {
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
