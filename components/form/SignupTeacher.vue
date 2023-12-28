<template>
    <section class="container">
        <h1 class="title">Signup</h1>
        <form class="form" @submit.prevent="onSubmit">
            <!-- <FormInput label="ID" /> -->
            <FormInput label="名前" id="name" autocomplete="name" v-model="name" />
            <FormInput label="メールアドレス" id="email" autocomplete="email" v-model="email" />
            <FormInput label="機器ID" id="machine_id" v-model="machineId" />
            <FormInput
                label="パスワード"
                id="password"
                type="password"
                autocomplete="new-password"
                v-model="password"
            />
            <FormInput
                label="パスワード確認"
                id="password_val"
                type="password"
                autocomplete="new-password"
                v-model="password_val"
            />
            <button class="submit" type="submit">登録</button>
        </form>
        <NuxtLink class="signup" to="/teacher/login">ログインはこちら</NuxtLink>
    </section>
</template>
<script setup>
const name = ref("");
const email = ref("");
const machineId = ref("");
const password = ref("");
const password_val = ref("");
const onSubmit = () => {};
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
.input_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.form_input {
    width: 240px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    padding: 0 10px;
    font-size: 16px;
    color: var(--black);
}
.form_input:focus {
    outline: none;
    border: 2px solid var(--primary);
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
