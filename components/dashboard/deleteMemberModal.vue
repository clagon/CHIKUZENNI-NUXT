<template>
    <div class="delete_modal">
        <p class="title">以下の{{ deleteStore.members.length }}名のメンバーを削除します:</p>
        <ul class="delete_members">
            <li v-for="member in deleteStore.members">{{ member }} さん</li>
        </ul>
        <div class="delete_buttons">
            <DashboardButtonSmol
                @setRef="onSetRefCancel"
                @click="onclickCancel"
                @keydown.prevent.tab="focusDelete"
                @keydown.prevent.shift.tab="focusDelete"
                @keydown.enter="onclickCancel"
                @keydown.space="onclickCancel"
                color="white"
                bg="gray"
                text="キャンセル"
            />
            <DashboardButtonSmol
                @setRef="onSetRefDelete"
                @click="onclickContinue"
                @keydown.prevent.tab="focusCancel"
                @keydown.prevent.shift.tab="focusCancel"
                @keydown.enter="onclickContinue"
                @keydown.space="onclickContinue"
                :color="'white'"
                :bg="'var(--red)'"
                text="削除"
            />
        </div>
    </div>
</template>
<script setup>
const modalStore = useModalStore();
const deleteStore = useDeleteStore();
const deleteelm = ref(null);
const cancelelm = ref(null);
onMounted(async () => {
    await nextTick();
    deleteelm.value.focus();
});
const onclickCancel = () => {
    closeAlert();
};
const onclickContinue = () => {
    closeAlert();
};
const onSetRefDelete = target => {
    deleteelm.value = target;
};
const onSetRefCancel = target => {
    cancelelm.value = target;
};
const focusDelete = () => {
    deleteelm.value.focus();
};
const focusCancel = () => {
    cancelelm.value.focus();
};
const closeAlert = () => {
    modalStore.setComponent(deleteStore.previousComponent, "normal");
    modalStore.alignBottom = true;
    // modalStore.close();
};
watch(
    () => modalStore.isOpen,
    value => {
        if (value) {
            deleteelm.value.focus();
        }
    }
);
</script>
<style scoped>
.delete_modal {
    width: 100%;
    background-color: var(--white);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
}
.title {
    font-size: 20px;
}
.delete_members {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-radius: 8px;
    margin: 16px 0;
    padding: 16px 0;
}
.delete_members li {
    font-size: 16px;
    margin: 4px 0;
    list-style-type: japanese-formal;
    list-style-type: disc;
}
.delete_buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>
