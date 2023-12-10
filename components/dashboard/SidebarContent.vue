<template>
    <div class="sidebar-content" :class="{ open: open.isOpen, selected: side.selected == route }">
        <NuxtLink :to="route" class="inner">
            <div class="icon" :class="{ open: open.isOpen }">
                <span class="material-symbols-outlined"> {{ icon }} </span>
            </div>
            <p class="title">{{ title }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
const open = useOpenStore();
const side = useSideStore();
const currentRoute = useRoute();

const props = defineProps({
    icon: {
        type: String,
        default: "home",
    },
    title: {
        type: String,
        default: "home",
    },
    route: {
        type: String,
        default: "/student/dashboard",
    },
});

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
        },
    ],
});

watch(
    () => currentRoute.query,
    (newRoute, oldRoute) => {
        const path = currentRoute.path.replace(/\/$/g, "");
        if (side.selected == "") {
            side.changeSelected(path);
        }
        if (props.route == path) {
            side.changeSelected(path);
        }
    }
);
</script>

<style scoped>
.sidebar-content {
    width: 100%;
    height: var(--dashboard-sidebar-content-height);
    display: flex;
    justify-content: center;
    align-items: center;
}
.sidebar-content.open {
    justify-content: flex-start;
    padding-left: 6px;
}
.inner {
    width: 80%;
    height: 80%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    overflow: hidden;
}
.inner .open {
    height: calc(var(--dashboard-sidebar-content-height) - 20px);
    width: calc(100% - 20px);
}
.selected .inner {
    background-color: var(--primary);
}
.inner:hover {
    background-color: #eee;
}
.selected .inner:hover {
    background-color: var(--primary);
}
.open .inner {
    /* margin-left: 6px; */
    padding: 4px;
    justify-content: flex-start;
}
.icon {
    width: 80%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.open .icon {
    width: var(--dashboard-sidebar-closed-width);
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-10px);
}
.selected .icon {
    color: var(--white);
}
.title {
    display: none;
}
.open .title {
    display: block;
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 10px;
    color: var(--black);
}
.selected .title {
    color: var(--white);
}
</style>
