<template>
    <li class="change-status-child">
        <p class="status_name">{{ name }}</p>
        <input class="status_input" type="text" v-model="currentValue" :disabled="!isEditable" />
        <div class="changestatus">
            <DashboardButtonSmol
                text="変更"
                icon="edit"
                color="var(--white)"
                bg="var(--primary)"
                @click="onClick(true)"
                v-if="!isEditable"
            />
            <DashboardButtonSmol
                text="保存"
                icon="save"
                color="var(--white)"
                bg="var(--primary)"
                @click="onSave(false)"
                v-if="isEditable"
            />
            <DashboardButtonSmol
                text="閉じる"
                icon="close"
                color="var(--white)"
                bg="var(--red)"
                @click="onClose(false)"
                v-if="isEditable"
            />
        </div>
    </li>
</template>
<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    setkey: {
        type: String,
        required: true,
    },
});
const currentValue = ref(props.value);
const previosValue = ref(props.value);
const emits = defineEmits(["change"]);
const onClick = value => {
    isEditable.value = value;
    previosValue.value = currentValue.value;
};
const isEditable = ref(false);
const onSave = () => {
    emits("change", currentValue.value, props.setkey);
    isEditable.value = false;
};
const onClose = () => {
    isEditable.value = false;
    currentValue.value = previosValue.value;
};
</script>
<style scoped>
.change-status-child {
    position: relative;
    width: 100%;
    /* height: 70px; */
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 3fr 250px;
    align-items: center;
    gap: 10px;
}
.status_name {
    font-size: 18px;
    font-weight: 700;
    color: var(--black);
    margin-right: 20px;
}

.status_input {
    border-radius: 8px;
    background-color: #fff;
    padding: 20px 30px;
    border: 1px solid #e5e7eb;
    width: 100%;
}
.status_input[disabled] {
    background-color: var(--white);
    color: var(--gray);
}
.changestatus {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 120px 120px;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
}
@media (max-width: 768px) {
    .change-status-child {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 5px;
    }
    .status_name {
        font-size: 20px;
    }
}
</style>
