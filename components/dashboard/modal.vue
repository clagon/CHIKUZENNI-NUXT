<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";
const close = ref(null);
const modal = ref(null);
const modalState = useModalStore();
const scroll = useScrollableStore();
const onClickClose = () => {
    modalState.close();
    scroll.set(true);
};
const { hasFocus, activate, deactivate } = useFocusTrap(modal, {
    allowOutsideClick: true,
    // immediate: true,
    returnFocusOnDeactivate: true,
});
onMounted(() => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modalState.isOpen) {
            onClickClose();
            deactivate();
        }
        if (e.key === " ") {
            console.log(e.target);
            e.target.click();
        }
    });
});
close.value?.addEventListener("keydown", e => {
    console.log(e.shiftKey);
    if (e.key === "Tab" && e.shiftKey && modalState.isOpen) {
        e.preventDefault();
        close.value.focus();
    }
});
watch(
    () => modalState.isOpen,
    value => {
        if (value) {
            close.value.focus();
            activate();
        } else {
            deactivate();
        }
    }
);
</script>
<template>
    <div ref="modal" class="change_modal" role="dialog" :aria-modal="modalState.isOpen">
        <div ref="close" class="close" @click="onClickClose" aria-label="閉じる" tabindex="0">
            <span class="material-symbols-outlined"> close </span>
        </div>
        <slot></slot>
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
