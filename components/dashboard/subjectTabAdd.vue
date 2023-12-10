<template>
    <div class="add_title">
        <p class="add_title_main">メンバーを追加する</p>
    </div>
    <div class="invite_code">
        <span class="invite_title">招待コード</span>
        <p class="code">tutmirleid</p>
    </div>
    <div class="copy_code">
        <button class="copy" @click="onClickCopy">
            <span class="material-symbols-outlined"> content_copy </span>リンクをコピー
        </button>
    </div>
</template>
<script setup>
const inviteCode = "tutmirleid";
const onClickCopy = async () => {
    const textToCopy = `https://chikuzenni.shoutaishimasu/invite?code=${inviteCode}`; // コピーするテキスト
    try {
        await navigator.clipboard.writeText(textToCopy);
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
};
</script>
<style scoped>
.add_title {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* border-bottom: 1px solid var(--primary); */
    margin-bottom: 20px;
}
.add_title_main {
    font-size: 30px;
    font-weight: 400;
    color: var(--primary);
}
.invite_code {
    position: relative;
    padding: 20px 10px;
}
.invite_title {
    font-size: 24px;
}

.code {
    width: 100%;
    padding: 20px 0;
    text-align: center;
    font-size: 40px;
    color: var(--primary);
}
.copy_code {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.copy {
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 700;
    color: var(--primary);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.copy:hover {
    cursor: pointer;
    background-color: rgba(var(--primary-rgb), 10%);
    text-align: center;
}
.copy:active {
    cursor: pointer;
    background-color: rgba(var(--primary-rgb), 15%);
}
</style>
