<template>
  <header class="table-header" :class="mode">
    <h1 class="table-header__title">Periodic Table of the Elements</h1>
  </header>
</template>
<script setup lang="ts">
  import { useModeStore } from '@/stores/modeStore';
  import { computed } from 'vue';

  const store = useModeStore();
  const mode = computed(() => store.mode)
</script>