<template>
    <section class="container">
        <h1 class="title">Login</h1>
        <form class="form" @submit.prevent="login">
            <FormInput label="メールアドレス" id="email" autocomplete="email" v-model="email" />
            <FormInput
                label="パスワード"
                id="password"
                type="password"
                autocomplete="current-password"
                v-model="password"
            />
            <button class="submit" type="submit">ログイン</button>
        </form>
        <NuxtLink class="signup" :to="'/' + target + '/signup'">新規登録はこちら</NuxtLink>
    </section>
</template>
<script setup>
const props = defineProps({
    mode: {
        type: String,
        default: "student",
    },
});
const target = props.mode == "teacher" ? "teacher" : "student";
const email = ref("");
const password = ref("");
</script>
<style scoped>
.container {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    font-weight: 700;
    color: var(--black);
    margin-bottom: 20px;
}
.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.submit {
    width: 160px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: var(--primary);
    color: var(--smoke-white);
    font-size: 16px;
    font-weight: 700;
    box-shadow: 0px 1px 2px rgba(32, 33, 36, 0.5);
    margin-top: 20px;
}
.submit:hover {
    filter: brightness(90%);
}
.submit:active {
    filter: none;
    transform: scale(0.98);
}
.signup {
    margin-top: 70px;
    font-size: 16px;
    font-weight: 700;
    color: var(--gray);
}
</style>
