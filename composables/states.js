import { defineStore } from "pinia";
import { ref } from "vue";

export const useOpenStore = defineStore("open", () => {
    const isOpen = ref(false);
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
