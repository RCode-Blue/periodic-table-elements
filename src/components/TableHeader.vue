<template>
  <!-- <header class="table-header"> -->
  <header class="table-header" :class="mode">
    <!-- <div> -->
      <!-- <v-icon width="100%" class="table-header__icon" name="fa-home"/> -->
       <i class="pi pi-home table-header__icon"></i>
    <!-- </div> -->
    <h1 class="table-header__title">Periodic Table of the Elements</h1>
  </header>
</template>
<script setup lang="ts">
import { useModeStore } from '@/stores/modeStore';
import { computed } from 'vue';

const store = useModeStore();
const mode = computed(() => store.mode)
console.log("mode: ", mode);
</script>