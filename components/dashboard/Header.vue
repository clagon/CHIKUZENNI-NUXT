<template>
    <header class="header">
        <div class="left">
            <DashboardHamburger />
            <ChikuzenniIcon :route="route" />
        </div>
        <div class="right"></div>
    </header>
</template>
<script setup>
const props = defineProps({
    route: {
        type: String,
        default: "/student/dashboard",
    },
});
</script>
<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--dashboard-header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2000;
    background-color: #fff;
}
.left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .header {
        background-color: #fff;
    }
}
</style>
