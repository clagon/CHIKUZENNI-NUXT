<script setup>
const modal = useModalStore();
const scroll = useScrollableStore();
const style = computed(() => {
    return {
        display: modal.isOpen ? "flex" : "none",
    };
});

// モーダルの外側をクリックしたらモーダルを閉じる
const background = ref(null);
onMounted(() => {
    background.value.addEventListener("click", e => {
        if (e.target == background.value && !modal.isOpen.value) {
            modal.close();
            scroll.set(true);
        }
    });
});
</script>
<template>
    <div class="modal_background" :style="style" ref="background">
        <!-- <NuxtIsland :name="newComponent"></NuxtIsland> -->
        <slot />
    </div>
</template>
<style scoped>
.modal_background {
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(1px);
}
</style>
