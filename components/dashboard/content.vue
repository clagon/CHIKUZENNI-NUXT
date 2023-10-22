<template>
    <section class="section">
        <h2 class="sectionTitle">{{ title }}</h2>
        <slot />
    </section>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
});
</script>
<style scoped>
.section {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 40px;
}
.sectionTitle {
    font-size: 24px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 1rem;
}
</style>
