<script setup>
const props = defineProps({
    subject: {
        type: Object,
        required: true,
    },
});
const modalStore = useModalStore();
const subjectStore = useSubjectStore();
const onclickLower = async mode => {
    subjectStore.setPendingRender(true);
    modalStore.open();
    new subjectStore.set(props.subject.id, mode).then(() => {
        subjectStore.setPendingRender(false);
    });
};
</script>
<template>
    <div class="subject_card">
        <div class="upper">
            <p class="subject_name">{{ subject.name }}</p>
        </div>
        <div class="lower">
            <p class="open_list lower_button" @click="onclickLower('list')">
                <span class="material-symbols-outlined"> group </span>
            </p>
            <p class="open_add lower_button" @click="onclickLower('add')">
                <span class="material-symbols-outlined"> person_add </span>
            </p>
        </div>
    </div>
</template>
<style>
.subject_card {
    width: min(100%, 400px);
    height: 120px;
    /* background-color: #f00; */
    border-radius: 8px;
    border: 1px solid var(--gray);
    color: var(--white);
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 1fr;
    grid-template-areas:
        "upper"
        "lower";
}
.upper {
    grid-area: upper;
    width: 100%;
    height: 100%;
    padding: 20px 30px 0 30px;
}
.subject_name {
    font-size: 20px;
    font-weight: 700;
    color: var(--black);
    align-self: center;
    justify-self: self-start;
}
.lower {
    grid-area: lower;
    width: 100%;
    height: 100%;
    background-color: var(--light-gray);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid var(--gray);
    padding: 0 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
.lower_button {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--black);
    border-radius: 8px;
    font-weight: 700;
    user-select: none;
}
.lower_button:hover {
    background-color: #eee;
}
.lower_button:active {
    background-color: #ddd;
}
</style>
