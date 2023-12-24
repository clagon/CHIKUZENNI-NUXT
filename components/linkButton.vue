<template>
    <NuxtLink class="link" :to="path" tabindex="-1">
        <button class="button">{{ text }}</button>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    path: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.link {
    text-decoration: none;
    width: 60%;
    height: 50px;
}
.button {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: none;
    background-color: var(--primary);
    color: var(--smoke-white);
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0px 1px 2px rgba(32, 33, 36, 0.5);
}
.button:hover {
    filter: brightness(90%);
}
.button:active {
    filter: none;
    transform: scale(0.98);
}
</style>
