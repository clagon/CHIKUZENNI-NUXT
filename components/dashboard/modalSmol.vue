<template>
    <div ref="modal" class="change_modal" role="dialog" :aria-modal="modalStore.isOpen">
        <div ref="close" class="close" @click="onClickClose" aria-label="閉じる" tabindex="0">
            <span class="material-symbols-outlined"> close </span>
        </div>
        <component :is="modalStore.component"></component>
    </div>
</template>
<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

const modalStore = useModalStore();
const scrollableStore = useScrollableStore();
const SmolModalStore = useSmolModalStore();
const deleteStore = useDeleteStore();

const close = ref(null);
const modal = ref(null);

const onClickClose = () => {
    modalStore.close();
    scrollableStore.set(true);
};
const { hasFocus, activate, deactivate } = useFocusTrap(modal, {
    allowOutsideClick: true,
    // immediate: true,
    returnFocusOnDeactivate: true,
});
onMounted(async () => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modalStore.isOpen) {
            onClickClose();
            deactivate();
        }
        if (e.key === " ") {
            if (e.target.type == "checkbox") {
                return;
            }
            e.target.click();
        }
    });
    await nextTick();
    if (modalStore.isOpen) {
        close.value.focus();
    }
});
close.value?.addEventListener("keydown", e => {
    console.log(e.shiftKey);
    if (e.key === "Tab" && e.shiftKey && modalStore.isOpen) {
        e.preventDefault();
        close.value.focus();
    }
});
watch(
    () => modalStore.isOpen,
    value => {
        if (value) {
            close.value.focus();
            activate();
        } else {
            deactivate();
            deleteStore.clear();
        }
    }
);
watch(
    () => SmolModalStore.isOpen,
    value => {
        if (value) {
            deactivate();
        } else {
            activate();
        }
    }
);
</script>
<style scoped>
.change_modal {
    position: relative;
    min-width: 450px;
    min-height: 300px;
    max-height: max(90%, 800px);
    background-color: var(--smoke-white);
    border-radius: 10px;
    padding: 35px;
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
    background-color: var(--smoke-white);
    filter: brightness(0.95);
    z-index: 101;
}
.close:hover {
    filter: brightness(0.9);
}
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .change_modal {
        width: 90%;
        /* height: 700px; */
        min-width: auto;
    }
}
</style>
