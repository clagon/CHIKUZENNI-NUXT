<template>
    <DashboardContent title="科目一覧">
        <div class="add_button">
            <DashboardButtonSmol
                text="科目を追加"
                @click="onClickAdd"
                bg="var(--primary)"
                color="var(--smoke-white)"
            />
        </div>
        <div class="subject_conatiner">
            <DashboardSubjectCard
                v-if="subjectList.length !== 0"
                v-for="subject in subjectList"
                :subject="subject"
                @clickOpenButton="onclickOpenButton"
            />
            <DashboardSubjectCard
                v-if="isPending && subjectList.length === 0"
                :is-pending="true"
                :subject="{ id: '', name: '' }"
                v-for="i in 10"
            />
            <div class="no-ubject-here" v-if="!isPending && subjectList.length === 0">
                科目がありません
            </div>
        </div>
    </DashboardContent>
</template>
<script setup>
import { DashboardSubjectAddModal, DashboardSubjectModal } from "#components";

const modalStore = useModalStore();
const subjectStore = useSubjectStore();
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
    modalStore.setComponent(DashboardSubjectModal, "normal");
});
const onclickOpenButton = async (mode, subject) => {
    subjectStore.setPendingRender(true);
    modalStore.setComponent(DashboardSubjectModal, "normal");
    modalStore.open();
    console.log(mode, subject);
    new subjectStore.set(subject.id, mode)
        .catch(err => {
            alert(err);
            subjectStore.setPendingRender(false);
        })
        .then(() => {
            subjectStore.setPendingRender(false);
        });
};
const onClickAdd = () => {
    subjectStore.setPendingRender(true);
    modalStore.setComponent(DashboardSubjectAddModal, "smol");
    modalStore.open();
    subjectStore.setPendingRender(false);
};
</script>
<style scoped>
.subject_conatiner {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
}
.add_button {
    margin: 20px 0;
}
.no-ubject-here {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    color: var(--gray);
}
</style>
