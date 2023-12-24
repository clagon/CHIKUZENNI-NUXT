<script setup>
const props = defineProps({
    subject: {
        type: Object,
        required: true,
    },
    isPending: {
        type: Boolean,
        default: false,
    },
});
const modalStore = useModalStore();
const subjectStore = useSubjectStore();
const onclickLower = async mode => {
    subjectStore.setPendingRender(true);
    modalStore.open();
    new subjectStore.set(props.subject.id, mode)
        .catch(err => {
            alert(err);
            subjectStore.setPendingRender(false);
        })
        .then(() => {
            subjectStore.setPendingRender(false);
        });
};
</script>
<template>
    <div class="subject_card" :class="{ pending: isPending }">
        <div class="upper" v-if="!isPending">
            <p class="subject_name">{{ subject.name }}</p>
        </div>
        <div class="lower" v-if="!isPending">
            <button class="open_list lower_button" @click="onclickLower('list')">
                <span class="material-symbols-outlined"> group </span>
            </button>
            <button class="open_add lower_button" @click="onclickLower('add')">
                <span class="material-symbols-outlined"> person_add </span>
            </button>
            <button class="open_settings lower_button" @click="onclickLower('settings')">
                <span class="material-symbols-outlined"> settings </span>
            </button>
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
    color: var(--smoke-white);
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60% 1fr;
    grid-template-areas:
        "upper"
        "lower";
}
.pending {
    background-image: linear-gradient(45deg, #fff 0%, #eee 50%, #fff 100%);
    background-size: 200% 100%;
    animation: pending 3s infinite;
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
