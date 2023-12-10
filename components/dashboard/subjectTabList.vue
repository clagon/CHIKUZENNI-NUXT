<template>
    <div class="list_title">
        <p class="list_title_main">メンバー</p>
        <p class="list_title_nums">人数: {{ subjectState.subjectData.length }}人</p>
    </div>
    <div class="tablist_container">
        <div class="listmember" v-for="member in subjectState.subjectData">
            <p>{{ member }}</p>
        </div>
        <div
            class="listmember pending"
            v-if="subjectState.pendingRender"
            v-for="i in 10"
            :key="i"
        ></div>
    </div>
</template>
<script setup>
const subjectState = useSubjectStore();
</script>
<style scoped>
.tablist_container {
    width: 100%;
    height: 500px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
}
.list_title {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* border-bottom: 1px solid var(--primary); */
    margin-bottom: 20px;
}
.list_title_main {
    font-size: 30px;
    font-weight: 400;
    color: var(--primary);
}
.list_title_nums {
    font-size: 14px;
    font-weight: 400;
    color: var(--primary);
    padding-right: 20px;
}
.listmember {
    width: 100%;
    background-color: var(--white);
    /* border-radius: 10px; */
    border-bottom: 1px solid var(--gray);
    padding: 20px 0 20px 10px;
}
.listmember.pending {
    padding-top: 36px;
    background-image: linear-gradient(45deg, #eee 0%, #ddd 50%, #eee 100%);
    background-size: 200% 100%;
    border: none;
    margin-bottom: 2px;
    animation: pending 3s infinite;
}
.listmember.pending > p {
    display: none;
}
@supports not selector(::-webkit-scrollbar) {
    .tablist_container {
        scrollbar-width: thin;
        scrollbar-color: var(--gray) var(--white);
    }
}
.tablist_container::-webkit-scrollbar {
    width: 6px;
}
.tablist_container::-webkit-scrollbar-track {
    background-color: var(--white);
}
.tablist_container::-webkit-scrollbar-thumb {
    background-color: var(--gray);
    border-radius: 9999px;
}
@keyframes pending {
    0% {
        background-position: 100% 0;
    }
    100% {
        background-position: -100% 0;
    }
    /* 100% {
        background-position: 0 0;
    } */
}
</style>
