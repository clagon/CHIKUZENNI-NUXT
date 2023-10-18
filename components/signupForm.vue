<template>
    <section class="container">
        <h1 class="title">Signup</h1>
        <form class="form" @submit.prevent="login">
            <formInput label="ID"/>
            <formInput label="名前"/>
            <formInput label="メールアドレス"/>
            <formInput label="機器ID" v-if="target=='teacher'"/>
            <formInput label="パスワード" type="password"/>
            <formInput label="パスワード確認" type="password"/>
            <button class="submit" type="submit">登録</button>
        </form>
        <NuxtLink class="signup" :to="'/'+ target +'/login'">ログインはこちら</NuxtLink>
    </section>
</template>
<script setup>

const props = defineProps({
    mode: {
        type: String,
        default: 'student',
    }
})
const target = props.mode == 'teacher' ? 'teacher':'student'
</script>
<style scoped>
.container {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.title{
    font-weight: 700;
    color: var(--black);
    margin-bottom: 20px;
}
.form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}
.input_wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.form_input{
    width: 240px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--gray);
    padding: 0 10px;
    font-size: 16px;
    color: var(--black);
}
.form_input:focus{
    outline: none;
    border: 2px solid var(--primary);
}
.submit{
        width: 160px;
        Height: 40px;
        border-radius: 10px;
        border: none;
        background-color: var(--primary);
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
        box-shadow: 0px 1px 2px rgba(32, 33, 36, .5);
        margin-top: 20px;
}
.submit:hover{
    filter: brightness(90%);
}
.submit:active{
    filter: none;
    transform: scale(0.98);
}
.signup{
    margin-top: 70px;
    font-size: 16px;
    font-weight: 700;
    color: var(--gray);
}
</style>