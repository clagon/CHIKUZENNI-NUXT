<template>
    <div class="subject-modal-container">
        <div class="tab_wrapper">
            <div class="tab">
                <input
                    type="radio"
                    name="subject_tab"
                    id="tab_list"
                    value="list"
                    v-model="selected"
                />
                <label for="tab_list" tabindex="0" class="tab_label">一覧</label>
            </div>
            <div class="tab">
                <input
                    type="radio"
                    name="subject_tab"
                    id="tab_add"
                    value="add"
                    v-model="selected"
                />
                <label for="tab_add" tabindex="0" class="tab_label">追加</label>
            </div>
            <div class="tab">
                <input
                    type="radio"
                    name="subject_tab"
                    id="tab_settings"
                    value="settings"
                    v-model="selected"
                />
                <label for="tab_settings" tabindex="0" class="tab_label">設定</label>
            </div>
        </div>
        <div class="content">
            <component :is="currentComponent" />
        </div>
    </div>
</template>
<script setup>
import {
    DashboardSubjectTabAdd,
    DashboardSubjectTabList,
    DashboardSubjectTabSettings,
} from "#components";
const modal = useModalStore();
const subject = useSubjectStore();
const selected = ref("list");
watch(
    () => subject.mode,
    value => {
        if (value) {
            selected.value = value;
        }
    }
);
const currentComponent = computed(() => {
    if (selected.value == "list") {
        return DashboardSubjectTabList;
    } else if (selected.value == "add") {
        return DashboardSubjectTabAdd;
    } else if (selected.value == "settings") {
        return DashboardSubjectTabSettings;
    }
});
</script>
<style scoped>
.subject-modal-container {
    position: relative;
    /* width: 500px;
    min-height: 600px; */
    /* display: grid;
    grid-template-rows: 64px 1fr; */
}
.tab_wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    padding: 0;
    padding-top: 20px;
    margin: 0;
}
.tab {
    flex-grow: 1;
    flex-shrink: 1;
    cursor: pointer;
}
.tab_label {
    width: 100%;
    display: block;
    text-align: center;
    /* padding: 10px 50px 5px; */
    padding: 10px 0 5px;
    border-bottom: 1px solid var(--gray);
    cursor: pointer;
    font-size: 20px;
    white-space: nowrap;
    text-wrap: nowrap;
}
.tab > input[type="radio"] {
    display: none;
}
.tab > input[type="radio"]:hover + .tab_label {
    /* color: rgba(var(--primary-rgb), 0.5); */
    border-bottom: 1px solid var(--primary);
}
.tab > input[type="radio"]:checked + .tab_label {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
}
.content {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    /* background-color: var(--smoke-white); */
    border-radius: 10px;
    display: grid;
    grid-template-rows: 80px 80px 1fr;
}
/* @media (max-width: 768px) { */
@media (max-width: 1024px) {
    .subject-modal-container {
        width: 100%;
    }
}
</style>
