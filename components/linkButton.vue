<template>
    <nuxt-link class="link" :to="path">
        <button class="button">{{ text }}</button>
    </nuxt-link >
</template>

<script setup>
    const props = defineProps({
        path: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    })
</script>

<style scoped>
    .link{
        text-decoration: none;
        width: 60%;
        height: 50px;
    }
    .button{
        width: 100%;
        Height: 100%;
        border-radius: 10px;
        border: none;
        background-color: var(--primary);
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0px 1px 2px rgba(32, 33, 36, .5);
    }
    .button:hover{
        filter: brightness(90%);
    }
    .button:active{
        filter: none;
        transform: scale(0.98);
    }
</style>
