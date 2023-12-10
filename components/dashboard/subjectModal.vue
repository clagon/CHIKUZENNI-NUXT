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
                <label for="tab_list" class="tab_label">List</label>
            </div>
            <div class="tab">
                <input
                    type="radio"
                    name="subject_tab"
                    id="tab_add"
                    value="add"
                    v-model="selected"
                />
                <label for="tab_add" class="tab_label">Add</label>
            </div>
        </div>
        <div class="content">
            <component :is="current_component" />
        </div>
    </div>
</template>
<script setup>
import { DashboardSubjectTabAdd, DashboardSubjectTabList } from "#components";
const modal = useModalStore();
const subject = useSubjectStore();
const selected = ref("");
watch(
    () => subject.mode,
    value => {
        if (value) {
            selected.value = value;
        }
    }
);
const current_component = computed(() => {
    return selected.value === "list" ? DashboardSubjectTabList : DashboardSubjectTabAdd;
});
</script>
<style scoped>
.subject-modal-container {
    position: relative;
    width: 500px;
    min-height: 600px;
}
.tab_wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
}
.tab {
    flex-grow: 1;
    flex-shrink: 1;
}
.tab_label {
    width: 100%;
    display: block;
    text-align: center;
    padding: 10px 50px 0;
    border-bottom: 1px solid var(--gray);
    cursor: pointer;
}
.tab > input[type="radio"] {
    display: none;
}
.tab > input[type="radio"]:checked + .tab_label {
    color: var(--primary);
    border-bottom: 1px solid var(--primary);
}
.content {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    background-color: var(--white);
    border-radius: 10px;
}
</style>
