<template>
    <NuxtPage />
</template>
<script setup>
useHead({
    titleTemplate: title => {
        return title ? `筑前煮 | ${title}` : "筑前煮";
    },
});
</script>
