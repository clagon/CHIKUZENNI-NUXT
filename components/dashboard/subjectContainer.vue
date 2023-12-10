<template>
    <DashboardContent title="科目一覧">
        <div class="subject_conatiner">
            <DashboardSubjectCard
                v-if="subjectList.length !== 0"
                v-for="subject in subjectList"
                :subject="subject"
            />
        </div>
    </DashboardContent>
</template>
<script setup>
// 科目のリスト
const subjectList = ref([]);
const { data, pending, error, refresh } = await customApi(
    "https://chikuzenni-mock-api.vercel.app/subjects"
);
onMounted(async () => {
    await refresh();
    if (error.value) alert(error.value);
    subjectList.value = data.value;
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
</style>
