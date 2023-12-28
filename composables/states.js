import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
    const isOpen = ref(false);
    const component = ref(null);
    const mode = ref("normal");
    const alignBottom = ref(true);
    function change() {
        isOpen.value = !isOpen.value;
    }
    function open() {
        isOpen.value = true;
    }
    function close() {
        isOpen.value = false;
    }
    function setComponent(value, componentMode) {
        component.value = value;
        if (componentMode) {
            mode.value = componentMode;
        }
    }
    function setAlignBottom(value) {
        alignBottom.value = value;
    }

    return {
        isOpen,
        change,
        open,
        close,
        component,
        setComponent,
        mode,
        alignBottom,
        setAlignBottom,
    };
});

export const useDeleteStore = defineStore("delete", () => {
    const members = ref([]);
    const previousComponent = ref(null);
    function setPreviousComponent(value) {
        previousComponent.value = value;
    }
    function set(value) {
        members.value = value;
    }
    function clear() {
        members.value = [];
    }

    return { members, set, clear, previousComponent, setPreviousComponent };
});

export const useSmolModalStore = defineStore("smolModal", () => {
    const isOpen = ref(false);
    const modal = ref(null);
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

export const useSubjectStore = defineStore("subject", () => {
    const currentSubject = ref("");
    const subjectData = ref([]);
    const mode = ref("list");
    const modes = ["list", "add", "settings"];
    const goterror = ref(false);
    const pendingRender = ref(true);
    function setPendingRender(value) {
        pendingRender.value = value;
    }
    async function set(subject_id, subject_mode) {
        if (modes.includes(subject_mode)) {
            mode.value = subject_mode;
        } else {
            mode.value = "list";
        }
        if (subject_id !== currentSubject.value) {
            subjectData.value = [];
            const { data, pending, error, refresh } = await customApi(
                `https://chikuzenni-mock-api.vercel.app/subjectmembers/${subject_id}`
            );
            if (error.value === null) {
                subjectData.value = data.value;
                currentSubject.value = subject_id;
            } else {
                goterror.value = true;
            }
        }
    }

    return { currentSubject, subjectData, set, mode, pendingRender, setPendingRender, goterror };
});

export const useScrollableStore = defineStore("scrollable", () => {
    const isScrollable = ref(true);
    function change() {
        isScrollable.value = !isScrollable.value;
    }
    function set(value) {
        isScrollable.value = value;
    }
    return { isScrollable, change, set };
});
