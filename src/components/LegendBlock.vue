<template>
  <div class="legend-block">
    <div class="legend__title block-header">Legend:</div>
    <ul class="legend__description">
      <li class="legend__list-item" v-for="physicalState in physicalStates">
        <span class="legend__chip">
          <div :class="`chip chip-light chip-state--${physicalState}`">
            <button class="chip-btn">
            </button>
          </div>
        </span>
        <span>
          {{ makeUpperWord(physicalState) }}
        </span>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, reactive, inject, watch, ref } from 'vue';
import { useModeStore } from '@/stores/modeStore';

type Mode = 'light' | 'dark';

// const props = defineProps({
//   mode: {
//     type: String,
//     default: "light",
//     required: true
//   }
// })

const makeUpperWord = (word: String) => {
  const upperWord = word.charAt(0).toUpperCase() + word.slice(1);
  return upperWord;
}

const physicalStates = ["solid", "liquid", "gas", "unknown"];

const modeStore = useModeStore();
const node = computed(() => modeStore.mode)

</script>