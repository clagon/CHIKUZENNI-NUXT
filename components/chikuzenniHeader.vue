
<template>
    <section class="header">
        <NuxtLink to="/">
            <img class="logo" src="~/assets/img/logo.png" alt="logo" />
        </NuxtLink>
    </section>
</template>
<style scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        height: 100px;
        width: 100%;
    }
    .logo{
        height: 100%;
        max-width: 50%;
        object-fit: contain;
    }
</style>