<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

const props = defineProps({
    component: {
        type: Object,
        required: true,
    },
});
const close = ref(null);
const modal = ref(null);
const modalState = useModalStore();
const scroll = useScrollableStore();
const SmolModalStore = useSmolModalStore();
const deleteStore = useDeleteStore();
const onClickClose = () => {
    modalState.close();
    scroll.set(true);
};
const { hasFocus, activate, deactivate } = useFocusTrap(modal, {
    allowOutsideClick: true,
    // immediate: true,
    returnFocusOnDeactivate: true,
});
onMounted(async () => {
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && modalState.isOpen) {
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
    close.value.focus();
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
<template>
    <div ref="modal" class="change_modal" role="dialog" :aria-modal="modalState.isOpen">
        <div ref="close" class="close" @click="onClickClose" aria-label="閉じる" tabindex="0">
            <span class="material-symbols-outlined"> close </span>
        </div>
        <component :is="component"></component>
    </div>
</template>
<style scoped>
.change_modal {
    position: relative;
    min-width: 450px;
    min-height: 300px;
    background-color: var(--white);
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
    background-color: var(--white);
    filter: brightness(0.95);
    z-index: 101;
}
.close:hover {
    filter: brightness(0.9);
}
@media (max-width: 768px) {
    .change_modal {
        width: 90%;
        height: 700px;
    }
}
</style>
