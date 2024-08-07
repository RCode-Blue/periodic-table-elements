<template>
  <TableHeader />
  <PeriodicTable />

</template>

<script setup>
import TableHeader from "@/components/TableHeader.vue";
import PeriodicTable from "@/components/PeriodicTable.vue";

import { onMounted } from "vue";

onMounted(() => {
  const body = document.body;
  if(!body.classList.contains("light")){
    body.classList.add("light");
  }
})
</script>
