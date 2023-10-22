<template>
    <section class="status" ref="pull">
        <input type="checkbox" id="status" class="status_input" v-model="isStatusOpen" />
        <div class="current_status" :style="statusStyle">
            <span class="status_color" :style="{ '--status_color': currentStatus.color }"></span>
            <p class="status_message">{{ currentStatus.status }}</p>
            <span class="expand">
                <label for="status">
                    <span class="material-symbols-outlined"> expand_more </span>
                </label>
            </span>
        </div>
        <ul class="other">
            <DashboardOtherCard
                v-for="(status, i) in otherStatuses"
                :key="i"
                :status="status.status"
                :color="status.color"
                @click="onClick(status)"
            />
        </ul>
    </section>
</template>
<script setup>
const isStatusOpen = ref(false);
const currentStatus = ref({ status: "Loading...", color: "#000000" });
const statuses = ref([]);
const statusStyle = computed(() => {
    return isStatusOpen.value
        ? {
              "border-top-left-radius": "8px",
              "border-top-right-radius": "8px",
          }
        : {
              "border-radius": "8px",
          };
});
const {
    data: statusFetched,
    pending,
    error,
    refresh,
} = await customApi("https://chikuzenni-mock-api.vercel.app/teacherStatus");
if (error.value) alert(error.value);
currentStatus.value = statusFetched.value.currentStatus;
statuses.value = statusFetched.value.statuses;
const otherStatuses = computed(() => {
    return statuses.value.filter(status => status.status !== currentStatus.value.status);
});

const onClick = async status => {
    isStatusOpen.value = false;
    const { data, pending, error, refresh } = await customApi(
        "https://chikuzenni-mock-api.vercel.app/teacherStatusChange",
        JSON.stringify(status),
        "POST"
    );
    console.log(data.value);
    currentStatus.value = data.value;
};
const pull = ref(null);
onMounted(() => {
    document.addEventListener("click", e => {
        if (pull.value && !pull.value.contains(e.target)) isStatusOpen.value = false;
    });
});
</script>

<style scoped>
ul,
ol {
    list-style: none;
    margin: 0;
    padding: 0;
}
.status {
    position: relative;
    width: 420px;
    height: 140px;
    z-index: 10;
    /* box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.221); */
}
.status_input {
    display: none;
    appearance: none;
}
.current_status {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a4a4a4;
}
.status_color {
    --width: 15px;
    width: var(--width);
    aspect-ratio: 1;
    border-radius: 9999px;
    position: absolute;
    top: calc(50% - calc(var(--width) / 2));
    left: 30px;
    background-color: var(--status_color);
    /* box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2); */
}
.status_message {
    font-size: 24px;
    font-weight: 700;
    color: #f1f3f5;
}
.expand {
    position: absolute;
    width: 50px;
    aspect-ratio: 1;
    border-radius: 9999px;
    top: calc(50% - 25px);
    right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.expand:hover {
    background-color: #f1f3f57c;
}
.expand * {
    cursor: pointer;
}
span.material-symbols-outlined {
    user-select: none;
    font-size: 36px;
}
.status_input:checked ~ .current_status .material-symbols-outlined {
    transform: rotate(180deg);
}
.other {
    max-height: 0;
    width: 100%;
    margin: 0;
    overflow: hidden;
}
.status_input:checked ~ .other {
    max-height: 1000px;
    margin-bottom: 1em;
}
.other_card:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
