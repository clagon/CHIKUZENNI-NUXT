<template>
    <nav class="sidebar" :style="styles">
        <slot />
    </nav>
</template>
<script setup>
const open = useOpenStore();
const styles = computed(() => {
    return {
        width: open.isOpen
            ? "var(--dashboard-sidebar-opened-width)"
            : "var(--dashboard-sidebar-closed-width)",
    };
});
</script>
<style scoped>
.sidebar {
    position: fixed;
    top: var(--dashboard-header-height);
    height: calc(100% - var(--dashboard-header-height));
}
</style>
