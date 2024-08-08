<template>
  <div class="block toggle-block">
    <div :class="['toggle-block__mode', mode]">
      <div class="block-header">Mode: </div>
      <label class="light-dark-switch">
        <input type="checkbox" name="mode-toggle-switch" class="check" @change="toggleMode">
        <span class="slider"></span>
      </label>
      <div>{{ mode }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, defineProps, reactive, inject } from 'vue';
  import { useModeStore } from '@/stores/modeStore';

  const modeStore = useModeStore();
  const mode = computed(()=>modeStore.mode);

  const toggleMode = () => {
    modeStore.toggleMode();
    const docBody = document.body;
    if(mode.value === 'light') {
      docBody.classList.remove('dark');
      docBody.classList.add('light')
    } else {
      docBody.classList.remove('light');
      docBody.classList.add('dark')
    }
  }
</script>