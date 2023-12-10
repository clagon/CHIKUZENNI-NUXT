<script setup>
import { DashboardChangeStatusModal } from "#components";
</script>
<template>
    <DashboardChangeStatus />
    <DashboardSetStatus />
    <DashboardModalBackground :component="DashboardChangeStatusModal" />
</template>
<script setup></script>

<style scoped></style>
