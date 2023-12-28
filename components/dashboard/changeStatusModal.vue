<template>
    <div class="status_contaier">
        <DashboardStatusModalCard
            @statusChange="onstatusChange(status)"
            :status="status"
            :is-selected="
                status.color === statusStore.currentStatus.color &&
                status.status === statusStore.currentStatus.status
            "
            v-for="(status, i) in statuses"
            :key="i"
        />
    </div>
</template>
<script setup>
const statusStore = useStatusStore();
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

const onstatusChange = async status => {
    const { data, pending, error, refresh } = await customApi(
        "https://chikuzenni-mock-api.vercel.app/teacherStatusChange",
        JSON.stringify(status),
        "POST"
    );
    if (error.value) alert("エラーが発生しました\n時間をおいて再度お試しください\n" + error.value);
    console.log(status);
    statusStore.set(status);
};
</script>
<style scoped>
.change_modal {
    position: relative;
    width: 450px;
    min-height: 300px;
    background-color: var(--smoke-white);
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
    background-color: var(--smoke-white);
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
    color: var(--smoke-white);
    font-weight: 700;
    background-color: var(--primary);
    border-radius: 8px;
    cursor: pointer;
} */
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .status_contaier {
        padding-left: 0px;
    }
}
</style>
