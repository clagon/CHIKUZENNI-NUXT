<template>
    <NuxtLink :to="route" class="container" :style="styles">
        <img
            class="image"
            src="~/assets/img/chikuzenni_icon1.png"
            alt="筑前煮のロゴアイコン"
        />
        <h1 class="text">筑前煮</h1>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    height: {
        type: String,
        default: "64px",
    },
    route: {
        type: String,
        default: "/",
    },
});
const styles = computed(() => {
    return {
        "--height": props.height,
        "--fontsize": props.height.replace("px", "") / 2 + "px",
    };
});
</script>
<style scoped>
.container {
    height: var(--height);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.image {
    height: 60%;
    object-fit: contain;
    margin-top: 10px;
}
.text {
    font-size: var(--fontsize);
    font-weight: bold;
    margin-left: 10px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
