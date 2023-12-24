<template>
    <NuxtPage />
</template>
<script setup>
useHead({
    titleTemplate: title => {
        return title ? `筑前煮 | ${title}` : "筑前煮";
    },
    link: [
        {
            rel: "icon",
            type: "image/png",
            href: "/favicon.ico",
        },
    ],
    htmlAttrs: {
        lang: "ja",
    },
});
useSeoMeta({
    title: "筑前煮",
    description: "筑前煮は、学習の記録を共有できるサービスです。",
    url: "https://chikuzenni-nuxt.vercel.app",
    ogImage: "http://chikuzenni-nuxt.vercel.app/ogp.png",
    ogDescription: "筑前煮は、学習の記録を共有できるサービスです。",
    ogSiteName: "筑前煮",
    ogTitle: "筑前煮",
    twitterCard: "summary_large_image",
    goType: "website",
});
</script>
