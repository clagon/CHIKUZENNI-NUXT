<template>
    <button ref="button" class="smol_button" :style="styleButton" :disabled="disabled">
        <span class="material-symbols-outlined" v-if="icon"> {{ icon }}</span>
        <p :class="{ noicon: !icon }">{{ text }}</p>
    </button>
</template>
<script setup>
const props = defineProps({
    color: {
        type: String,
        reqired: true,
    },
    bg: {
        type: String,
        reqired: true,
    },
    text: {
        type: String,
        reqired: true,
    },
    icon: {
        type: String,
        default: "",
    },
    disabled: {
        type: Boolean,
        default: false,
    },
});
const button = ref(null);
const emit = defineEmits(["setRef"]);
onMounted(async () => {
    await nextTick();
    emit("setRef", button.value);
});
const styleButton = computed(() => {
    return props.disabled
        ? { color: "var(--gray)", backgroundColor: "var(--smoke-white)" }
        : { color: props.color, backgroundColor: props.bg };
});
</script>
<style scoped>
.smol_button {
    height: 40px;
    padding: 0 15px 0 10px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.smol_button:has(.noicon) {
    padding: 0 20px;
}
.smol_button:hover {
    filter: brightness(0.9);
}
.smol_button:active {
    filter: brightness(0.8);
}
/* .smol_button:focus {
    outline: 2px solid var(--black);
} */
.smol_button:disabled {
    filter: saturate(0.6) contrast(0.8) brightness(0.8);
    cursor: default;
}
.smol_button > span {
    margin-right: 5px;
    font-size: 24px;
    cursor: inherit;
}
.smol_button > p {
    margin: 0;
    text-wrap: nowrap;
    white-space: nowrap;
    cursor: inherit;
    user-select: none;
    transform: translateY(-2px);
}
</style>
