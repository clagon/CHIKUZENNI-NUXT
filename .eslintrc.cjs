module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "@vue/prettier",
        "plugin:nuxt/recommended",
        "@nuxtjs",
    ],
    rules: {
        "vue/singleline-html-element-content-newline": "off",
        "vue/multiline-html-element-content-newline": "off",
        "vue/name-property-casing": ["error", "PascalCase"],
        "vue/no-v-html": "off",
    },
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["vue"],
    rules: {},
}
