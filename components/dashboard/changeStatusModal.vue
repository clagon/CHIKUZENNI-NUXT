<script setup>
const modal = useModalStore();
const statusStore = useStatusStore();
const onClickClose = () => {
    modal.close();
};
const statuses = ref([]);
const {
    data: statusFetched,
    pending,
    error,
    refresh,
} = await customApi("https://chikuzenni-mock-api.vercel.app/teacherStatus");
onMounted(async () => {
    await refresh();
    if (error.value) alert(error.value);
    statusStore.set(statusFetched.value.currentStatus);
    statuses.value = statusFetched.value.statuses;
});

const onClickStatus = async status => {
    const { data, pending, error, refresh } = await customApi(
        "https://chikuzenni-mock-api.vercel.app/teacherStatusChange",
        JSON.stringify(status),
        "POST"
    );
    if (error.value) alert("エラーが発生しました\n時間をおいて再度お試しください\n" + error.value);
    console.log(data.value);
    statusStore.set(data.value);
};
</script>
<template>
    <div class="change_modal">
        <div class="status_contaier">
            <DashboardModalCard
                @click="onClickStatus(status)"
                :status="status"
                :is-selected="
                    status.color === statusStore.currentStatus.color &&
                    status.status === statusStore.currentStatus.status
                "
                v-for="(status, i) in statuses"
                :key="i"
            />
        </div>
        <div class="close" @click="onClickClose">
            <span class="material-symbols-outlined"> close </span>
        </div>
        <!-- <button class="save">保存</button> -->
    </div>
</template>
<style scoped>
.change_modal {
    position: relative;
    width: 450px;
    min-height: 300px;
    background-color: var(--white);
    border-radius: 10px;
    padding: 30px;
}
.status_contaier {
    padding-left: 45px;
    padding-top: 25px;
    /* padding-bottom: 35px;
    padding-right: 45px; */
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3px;
}
.close {
    position: absolute;
    border-radius: 8px;
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--white);
    filter: brightness(0.95);
}
.close:hover {
    filter: brightness(0.9);
}
/* .save {
    position: absolute;
    bottom: 10px;
    right: 15px;
    padding: 10px 20px;
    height: 40px;
    color: var(--white);
    font-weight: 700;
    background-color: var(--primary);
    border-radius: 8px;
    cursor: pointer;
} */
</style>
