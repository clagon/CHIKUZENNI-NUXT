<template>
    <div class="toggle" for="toggle" @click="onClick" :class="{ checked: isOn }">
        <div class="toggle_inner"></div>
    </div>
</template>
<script setup>
const props = defineProps({
    default: {
        type: Boolean,
        default: false,
    },
});
const emits = defineEmits(["click"]);
const isOn = ref(props.default);
const onClick = e => {
    isOn.value = !isOn.value;
    emits("click", isOn.value);
};
</script>
<style scoped>
.toggle {
    position: relative;
    width: 50px;
    height: 30px;
    border-radius: 15px;
    background-color: #e5e7eb;
    position: relative;
    cursor: pointer;
}
.toggle_inner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    transition: all 0.3s ease;
}
.toggle.checked {
    background-color: var(--primary);
}
.toggle.checked > .toggle_inner {
    left: calc(100% - 25px);
}
</style>
