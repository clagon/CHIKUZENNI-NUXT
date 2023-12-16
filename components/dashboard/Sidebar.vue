<template>
    <nav id="sidebar" class="sidebar" :style="styles">
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
@media (max-width: 768px) {
    .sidebar {
        bottom: 0;
        top: unset;
        height: var(--dashboard-footer-nav-height);
        width: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-top: 1px solid #eee;
        box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
}
</style>
