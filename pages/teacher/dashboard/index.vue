<script setup>
import { DashboardChangeStatusModal } from "#components";
</script>
<template>
    <DashboardChangeStatus />
    <DashboardSetStatus />
    <DashboardModalBackground>
        <DashboardModalSmol :component="DashboardChangeStatusModal" />
    </DashboardModalBackground>
</template>
<script setup></script>

<style scoped></style>
