// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true, timeline: { enabled: true } },
    css: ["destyle.css/destyle.min.css", "@/assets/css/main.css"],
    modules: ["@pinia/nuxt", "@vueuse/nuxt"],
});
