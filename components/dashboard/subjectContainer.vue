<template>
    <DashboardContent title="科目一覧">
        <div class="subject_conatiner">
            <DashboardSubjectCard
                v-if="subjectList.length !== 0"
                v-for="subject in subjectList"
                :subject="subject"
            />
            <DashboardSubjectCard
                v-if="isPending && subjectList.length === 0"
                :is-pending="true"
                subject="{id:'',name:''}"
                v-for="i in 10"
            />
            <div class="no-ubject-here" v-if="!isPending && subjectList.length === 0">
                科目がありません
            </div>
        </div>
    </DashboardContent>
</template>
<script setup>
// 科目のリスト
const subjectList = ref([]);
const isPending = ref(true);
const { data, pending, error, refresh } = await customApi(
    "https://chikuzenni-mock-api.vercel.app/subjects"
);
onMounted(async () => {
    await refresh();
    if (error.value) alert(error.value);
    subjectList.value = data.value;
    isPending.value = false;
});
</script>
<style scoped>
.subject_conatiner {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}
.no-ubject-here {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    color: var(--gray);
}
</style>
