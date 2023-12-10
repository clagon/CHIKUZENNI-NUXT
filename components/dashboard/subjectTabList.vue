<template>
    <div class="tablist_container">
        <div class="listmember" v-for="member in subjectState.subjectData">
            <p>{{ member }}</p>
        </div>
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
    align-items: center;
    padding: 20px 0;
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
.listmember {
    width: 100%;
    height: 70px;
    background-color: var(--white);
    /* border-radius: 10px; */
    border-bottom: 1px solid var(--gray);
    padding: 10px 0;
}
</style>
