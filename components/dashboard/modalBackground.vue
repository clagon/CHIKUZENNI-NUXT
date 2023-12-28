<template>
    <div class="modal_background" :style="style" ref="background">
        <DashboardModalSmol v-if="modalStore.mode == 'smol'" />
        <DashboardModal v-if="modalStore.mode == 'normal'" />
        <DashboardModalAlert v-if="modalStore.mode == 'alert'" />
    </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
const modalStore = useModalStore();
const scrollableStore = useScrollableStore();
const style = computed(() => {
    return {
        display: modalStore.isOpen ? "flex" : "none",
    };
});

// モーダルの外側をクリックしたらモーダルを閉じる
const background = ref(null);
onMounted(() => {
    background.value.addEventListener("click", e => {
        if (e.target == background.value && !modalStore.isOpen.value) {
            modalStore.close();
            scrollableStore.set(true);
        }
    });
});
</script>
<style scoped>
.modal_background {
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(1px);
}
</style>
