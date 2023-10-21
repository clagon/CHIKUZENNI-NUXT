<template>
    <DashboardHeader />
    <DashboardSidebar>
        <DashboardSidebarContent title="ホーム" icon="home" route="/student/dashboard" />
        <DashboardSidebarContent title="追加" icon="add" route="/student/dashboard/add" />
        <DashboardSidebarContent title="設定" icon="settings" route="/student/dashboard/settings" />
    </DashboardSidebar>
    <div class="content" :style="styles">
        <NuxtPage />
    </div>
</template>

<script setup>
const open = useOpenStore();
const side = useSideStore();
const route = useRoute();
const styles = computed(() => {
    return {
        "padding-left": open.isOpen
            ? "var(--dashboard-sidebar-opened-width)"
            : "var(--dashboard-header-height)",
    };
});
const makeTitle = () => {
    return route.path.replace(/(\/student|teacher)\/dashboard/g, "")
        ? route.path.replace(/(\/student|teacher)\/dashboard/g, "").replace("/", "")
        : "home";
};
onMounted(() => {
    if (route.path.startsWith("/student/dashboard")) {
        side.changeSelected(route.path);
    }
});
useSeoMeta({
    description: "cHiKUzEnNi iS a sImPlE sChOoL mAnAgEmEnT sYsTeM.",
    ogTitle: "筑前煮",
    ogDescription: "筑前煮",
    // ogImage: "[og:image]",
    // ogUrl: "[og:url]",
    // twitterTitle: "[twitter:title]",
    // twitterDescription: "[twitter:description]",
    // twitterImage: "[twitter:image]",
    // twitterCard: "summary",
});

useHead({
    htmlAttrs: {
        lang: "ja",
    },
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.png",
        },
    ],
});
watch(
    () => route.query,
    (newRoute, oldRoute) => {
        useSeoMeta({
            description: "cHiKUzEnNi iS a sImPlE sChOoL mAnAgEmEnT sYsTeM.",
            ogTitle: "筑前煮",
            ogDescription: "筑前煮",
            // ogImage: "[og:image]",
            // ogUrl: "[og:url]",
            // twitterTitle: "[twitter:title]",
            // twitterDescription: "[twitter:description]",
            // twitterImage: "[twitter:image]",
            // twitterCard: "summary",
        });

        useHead({
            htmlAttrs: {
                lang: "ja",
            },
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/favicon.png",
                },
            ],
        });
    }
);
</script>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    padding-top: var(--dashboard-header-height);
}
</style>
