<template>
    <!-- 厳密モーダル -->
    <div class="smol_modal_background" :style="style">
        <div class="smol_modal">
            <component :is="SmolModalStore.modal" />
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    component: {
        type: Object,
        required: true,
    },
});
const SmolModalStore = useSmolModalStore();
const style = computed(() => {
    return {
        display: SmolModalStore.isOpen ? "flex" : "none",
    };
});
</script>
<style scoped>
.smol_modal_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}
.smol_modal {
    position: relative;
    width: min(400px, 100%);
    min-height: 100px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
    padding: 20px;
}
</style>
