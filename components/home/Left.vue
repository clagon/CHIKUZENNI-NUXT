<template>
    <div class="grid_left"><slot></slot></div>
</template>
<style scoped>
    .grid_left{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 100px;
        background-image: linear-gradient(to right, var(--primary), 90%, var(--white));
    }
    @media screen and (max-width: 1024px) {
        .grid_left{
            display: none;
        }
    }
</style>