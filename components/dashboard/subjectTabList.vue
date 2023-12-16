<template>
    <div class="list_title">
        <p class="list_title_main">メンバー</p>
        <p class="list_title_nums">人数: {{ subjectState.subjectData.length }}人</p>
    </div>
    <div class="listmember-item check_all">
        <div class="member-item-check">
            <input
                class="member-checkbox"
                type="checkbox"
                @click="onCheckedAll"
                v-model="selectedALL"
            />
            <span class="material-symbols-outlined"> check </span>
        </div>
        <DashboardButtonSmol
            class="listmember-item"
            text="削除"
            icon="delete"
            color="var(--white)"
            bg="var(--red)"
            colorDisabled="var(--white)"
            bgDisabled="var(--gray)"
            :disabled="selectedItems.length ? selectedItems.length == 0 : true"
            @click="onDelete"
        />
    </div>
    <div class="tablist_container">
        <div class="listmember" v-for="member in subjectState.subjectData">
            <div class="listmember-item">
                <div class="member-item-check">
                    <input
                        class="member-checkbox"
                        type="checkbox"
                        v-model="selectedItems"
                        :value="member"
                    />
                    <span class="material-symbols-outlined"> check </span>
                </div>
                <p>{{ member }}</p>
            </div>
        </div>
        <div
            class="listmember pending"
            v-if="subjectState.pendingRender"
            v-for="i in 10"
            :key="i"
        ></div>
        <div
            class="noonehere"
            v-if="
                !subjectState.pendingRender &&
                subjectState.subjectData.length == 0 &&
                !subjectState.goterror
            "
        >
            まだメンバーはいません
        </div>
        <div class="error" v-if="!subjectState.pendingRender && subjectState.goterror">
            エラーが発生しました
        </div>
    </div>
</template>
<script setup>
import { DashboardDeleteMemberSmolModal } from "#components";

const subjectState = useSubjectStore();
const deleteStore = useDeleteStore();
const smolModal = useSmolModalStore();
const modalState = useModalStore();
const selectedItems = ref([]);
const selectedALL = ref(false);
const onCheckedAll = () => {
    if (selectedALL.value) {
        selectedItems.value = [];
        selectedALL.value = false;
    } else {
        selectedItems.value = subjectState.subjectData;
        selectedALL.value = true;
    }
};
watch(
    () => selectedItems.value,
    newVal => {
        if (newVal.length == subjectState.subjectData.length) {
            selectedALL.value = true;
        } else {
            selectedALL.value = false;
        }
    }
);
const onDelete = () => {
    deleteStore.set(selectedItems.value);
    smolModal.open();
    smolModal.modal = DashboardDeleteMemberSmolModal;
};
watch(
    () => modalState.isOpen,
    newVal => {
        if (!newVal) {
            selectedItems.value = [];
            selectedALL.value = false;
        }
    }
);
</script>
<style scoped>
.tablist_container {
    width: 100%;
    height: 100%;
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
.check_all {
    padding: 20px 0 20px 10px;
    box-shadow: 0 1.4px 0 0 var(--gray);
    margin-bottom: 2px;
}
.listmember-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.member-checkbox {
    width: 100%;
    height: 100%;
    /* background-color: #f00; */
    transform: scale(1.5);
    /* display: none; */
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
}
.member-item-check {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    position: relative;
    border: 1px solid var(--gray);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.member-checkbox + span {
    display: none;
    position: absolute;
    user-select: none;
    pointer-events: none;
    text-align: center;
    font-size: 20px;
    top: 0.1px;
}
.member-checkbox:checked + span {
    display: block;
}

.noonehere {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    color: var(--gray);
}
.error {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    font-size: 20px;
    color: var(--gray);
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
