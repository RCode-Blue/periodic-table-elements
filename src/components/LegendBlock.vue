<template>
  <div class="block legend-block" :class="`legend-block--${mode}`">
    <ul class="legend__description block-text">
      <li class="legend__list-item" v-for="physicalState in physicalStates">
        <span class="legend__chip">
          <div :class="`chip chip-${mode} chip-state--${physicalState}`">
            <button class="chip-btn">
            </button>
          </div>
        </span>
        <span>
          {{ makeUpperWord(physicalState) }}
        </span>
      </li>
    </ul>
    <div class="block-footnote">
      Physical state at STP (Standard Temperature and Pressure)
    </div>
  </div>
</template>
<script setup lang="ts">
  import { computed, defineProps, reactive, inject, watch, ref } from 'vue';
  import { useModeStore } from '@/stores/modeStore';

  type Mode = 'light' | 'dark';

  const makeUpperWord = (word: String) => {
    const upperWord = word.charAt(0).toUpperCase() + word.slice(1);
    return upperWord;
  }

  const physicalStates = ["solid", "liquid", "gas", "unknown"];

  const modeStore = useModeStore();
  const mode = computed(() => modeStore.mode)
</script>