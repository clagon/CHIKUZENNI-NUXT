<template>
    <DashboardContent title="ステータスのお名前を変更する" style="z-index: 1">
        <ul>
            <DashboardSetStatusChild
                :name="value.name"
                :value="value.status"
                :key="key"
                :setkey="key"
                @change="
                    (value, key) => {
                        console.log(value, key);
                        values[key].status = value;
                    }
                "
                v-for="(value, key) in values"
            />
        </ul>
        <div class="save">
            <button class="save_button">保存</button>
        </div>
    </DashboardContent>
</template>
<script setup>
const values = ref({});
const { data, error, pending, refresh } = await useFetch(
    "https://chikuzenni-mock-api.vercel.app/teacherStatusesName"
);
if (error.value) console.log(error.value);
else values.value = data.value;
</script>
<style scoped>
ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.section:has(.save) {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 20px 20px 85px 20px;
    margin-bottom: 40px;
    position: relative;
}
.sectionTitle {
    font-size: 24px;
    font-weight: 700;
    color: var(--black);
    margin-bottom: 1rem;
}
.save {
    position: absolute;
    width: 100%;
    height: 60px;
    background-color: var(--white);
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.save_button {
    margin-right: 10px;
    padding: 10px 20px;
    background-color: #e5e7eb;
    border-radius: 8px;
    font-weight: 700;
}
.save_button:hover {
    background-color: #d1d5db;
}
.save_button:active {
    background-color: #9ca3af;
}
@media (max-width: 768px) {
    ul {
        padding-top: 20px;
    }
}
</style>
