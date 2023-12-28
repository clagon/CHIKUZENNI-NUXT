<template>
    <DashboardHeader route="/teacher/dashboard" />
    <DashboardSidebar>
        <DashboardSidebarContent title="ホーム" icon="home" route="/teacher/dashboard" />
        <DashboardSidebarContent
            title="科目一覧"
            icon="clinical_notes"
            route="/teacher/dashboard/list"
        />
        <DashboardSidebarContent title="設定" icon="settings" route="/teacher/dashboard/settings" />
    </DashboardSidebar>
    <div class="content" :style="styles" role="main">
        <div class="container">
            <NuxtPage />
        </div>
    </div>
</template>

<script setup>
const open = useOpenStore();
const side = useSideStore();
const route = useRoute();
const scroll = useScrollableStore();

// titleタグ/Headタグの設定
const makeTitle = () => {
    return route.path.replace(/(\/student|teacher)\/dashboard/g, "").replace("/", "")
        ? route.path.replace(/(\/student|teacher)\/dashboard/g, "").replace(/\//g, "")
        : "home";
};
onMounted(() => {
    if (route.path.startsWith("/teacher/dashboard")) {
        side.changeSelected(route.path.replace(/\/$/g, ""));
    }
});

// サイドバーの開閉によってpadding-leftを変更
const styles = computed(() => {
    return {
        "padding-left": open.isOpen
            ? "var(--dashboard-sidebar-opened-width)"
            : "var(--dashboard-header-height)",
        overflow: scroll.isScrollable ? "auto" : "hidden",
    };
});
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding-top: var(--dashboard-header-height);
}
.container {
    width: 100%;
    height: 100%;
    padding-left: 140px;
    padding-top: 40px;
    padding-right: 40px;
}
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .content {
        padding-left: 0 !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 100px;
        margin: 20px 0;
    }
    .container {
        width: 90%;
        height: auto;
        padding: 0;
        padding-left: 10px !important;
    }
}
</style>
