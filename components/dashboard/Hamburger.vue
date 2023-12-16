<template>
    <div class="hamburger-wrapper">
        <button
            class="hamburger"
            aria-controls="sidebar"
            :aria-expanded="open.isOpen"
            @click="onClick()"
            aria-label="サイドバーを開く"
        >
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </button>
    </div>
</template>
<script setup>
const open = useOpenStore();
const onClick = () => {
    open.change();
};
</script>
<style scoped>
.hamburger-wrapper {
    width: var(--dashboard-sidebar-closed-width);
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hamburger {
    width: 40px;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 50%;
}
.hamburger:hover {
    background-color: #eee;
}
.hamburger:active {
    background-color: #ddd;
    transition: 0.1s ease-in-out;
    border: 1px solid #ccc;
}
.line {
    width: 24px;
    height: 1px;
    background-color: #000;
}
@media (max-width: 768px) {
    .hamburger-wrapper {
        display: none;
    }
}
</style>
