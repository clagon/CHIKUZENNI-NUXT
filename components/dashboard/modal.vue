<script setup>
import { useFocusTrap } from "@vueuse/integrations/useFocusTrap";

// const props = defineProps({
//     component: {
//         type: Object,
//         required: true,
//     },
// });
const close = ref(null);
const modal = ref(null);
const modalStore = useModalStore();
const scroll = useScrollableStore();
const SmolModalStore = useSmolModalStore();
const deleteStore = useDeleteStore();
const onClickClose = () => {
    modalStore.close();
    scroll.set(true);
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
    close.value.focus();
});
close.value?.addEventListener("keydown", e => {
    console.log(e.shiftKey);
    if (e.key === "Tab" && e.shiftKey && modalStore.isOpen) {
        e.preventDefault();
        close.value.focus();
    }
});
// const modalStyle = computed(() => {
//     if (modal.value) {
//         return {
//             "--scheight": `calc(${modal.value.clientHeight} - 240px)`,
//         };
//     }
// });
const modalStyle = ref(null);
modal.value?.addEventListener("resize", () => {
    console.log("resize");
    modalStyle.value = {
        "--scheight": `calc(${modal.value.clientHeight}px - 300px)`,
    };
});
watch(
    () => modalStore.isOpen,
    value => {
        if (value) {
            close.value.focus();
            activate();
            nextTick().then(() => {
                modalStyle.value = {
                    "--scheight": `calc(${modal.value.clientHeight}px - 300px)`,
                };
            });
        } else {
            deactivate();
            deleteStore.clear();
        }
    }
);
// watch(
//     () => modalStore.component,
//     value => {
//         nextTick().then(() => {
//             modalStyle.value = {
//                 "--scheight": `calc(${modal.value.clientHeight}px - 300px)`,
//             };
//         });
//     }
// );
</script>
<template>
    <div
        ref="modal"
        class="change_modal"
        :style="modalStyle"
        role="dialog"
        :aria-modal="modalStore.isOpen"
    >
        <div ref="close" class="close" @click="onClickClose" aria-label="閉じる" tabindex="0">
            <span class="material-symbols-outlined"> close </span>
        </div>
        <component :is="modalStore.component"></component>
    </div>
</template>
<style scoped>
.change_modal {
    /* --scheight: calc(100% - 240px); */
    position: relative;
    min-width: 450px;
    min-height: 300px;
    width: 90%;
    height: 90%;
    /* max-height: max(90%, 800px); */
    background-color: var(--white);
    /*
    border-top-right-radius: 10px;
    border-top-left-radius: 10px; */
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
        min-width: auto;
        min-height: auto;
        width: 100%;
        height: 80%;
    }
}
</style>
