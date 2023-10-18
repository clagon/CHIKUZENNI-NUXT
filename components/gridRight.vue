<template>
    <div class="grid_right"><slot></slot></div>
</template>
<style scoped>
    .grid_right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: var(--white);
    }
    @media screen and (max-width: 1024px) {
        .grid_right{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            background-color: var(--white);
        }
    }
</style>