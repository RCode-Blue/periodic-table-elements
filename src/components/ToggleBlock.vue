<template>
  <div class="block toggle-block">
    <div :class="['toggle-block__mode', state.mode]">
      <div class="block-header">Mode: </div>
      <label class="light-dark-switch">
        <input type="checkbox" class="check" @change="toggleMode">
        <span class="slider"></span>
      </label>
      <div>{{ state.mode }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, reactive, inject } from 'vue';

  type Mode = 'light' | 'dark';

  const props = defineProps({
    mode: {
      type: String,
      default: "light",
      required: true
    }
  })

  const updateMode = inject('updateMode') as (newMode: Mode) => void;

  const state = reactive({
    mode: props.mode as Mode,
  })

  const toggleMode = () => {
    state.mode = (state.mode === 'light') ? 'dark' : 'light';
    updateMode(state.mode)
    if(state.mode === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
    if(state.mode === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
  }

</script>