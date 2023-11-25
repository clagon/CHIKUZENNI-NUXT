<script setup>
const copy = ref(null);
const onClickCopy = () => {
    navigator.clipboard.writeText(copy.value.value);
};
</script>
<template>
    <div class="addstudent">
        <input
            ref="copy"
            type="text"
            readonly
            class="add_link"
            value="https://chikuzenni.shoutai/invite?code=invitecodegakokonikimasuYo"
        />
        <button class="copy_link" @click="onClickCopy">コピー</button>
    </div>
</template>
<style scoped>
.addstudent {
    width: 90%;
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 100px;
    grid-template-rows: 1fr;
    border-radius: 8px;
}
.add_link {
    padding-left: 20px;
    background-color: #f5f5f5;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    font-size: 20px;
}
.copy_link {
    width: 100px;
    height: 100%;
    background-color: var(--primary);
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.copy_link:hover {
    filter: brightness(0.9);
}
.copy_link:active {
    filter: brightness(0.95);
}
</style>
