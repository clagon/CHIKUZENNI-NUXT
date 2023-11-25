import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const isOpen = ref(false);
    function change() {
        isOpen.value = !isOpen.value;
    }
    function open() {
        isOpen.value = true;
    }
    function close() {
        isOpen.value = false;
    }

    return { isOpen, change, open, close };
});

export const useStatusStore = defineStore("status", () => {
    const currentStatus = ref("");
    function set(value) {
        currentStatus.value = value;
    }
    return { currentStatus, set };
});

export const useOpenStore = defineStore("open", () => {
    const isOpen = ref(true);
    function change() {
        isOpen.value = !isOpen.value;
    }
    return { isOpen, change };
});
export const useSideStore = defineStore("side", () => {
    const selected = ref("");
    function changeSelected(value) {
        selected.value = value;
    }
    return { selected, changeSelected };
});
