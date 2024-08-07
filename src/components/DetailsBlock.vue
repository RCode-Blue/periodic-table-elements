<template>
  <div class="block details">
    <!-- <Chip :mode="props.mode" :element="props.element" /> -->
    <Chip :mode="mode" :element="props.element" />
    <!-- <div :class="['sidebar', props.mode]"> -->
      <div :class="['sidebar', mode]">
      <ul class="sidebar-properties block-text">
        <li class="item">
          <span class="property">Atomic number: </span>
        <span class="value">{{atomicNo}}</span>
        </li>
        <li class="item">
          <span class="property">Name: </span><span class="value">{{name}}</span></li>
        <li class="item">
          <span class="property">Atomic mass: </span><span class="value">{{  atomicMass  }}</span></li>
        <li class="item">
          <span class="property">Electron configuration: </span>
          <span class="value">{{electronConfig}}</span>
        </li>
        <li class="item">
          <span class="property">Atomic radius: </span>
          <span class="value">{{ atomicRadius }}</span>
        </li>
        <li class="item">
          <span class="property">Melting point: </span>
          <span class="value">{{ meltingPt }}</span>
        </li>
        <li class="item">
          <span class="property">Boiling point: </span>
          <span class="value">{{ boilingPt }}</span>
        </li>
        <li class="item">
          <span class="property">Density: </span>
          <span class="value">{{density}}</span>
        </li>
        <li class="item">
          <span class="property">Group block: </span>
          <span class="value">{{ groupBlock }}</span>
        </li>
        <li class="item">
          <span class="property">Year discovered: </span>
          <span class="value">{{ yearDiscovered }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Chip from "@/components/Chip.vue"
  import { computed, defineProps, watch, ref }  from 'vue';
  import { useModeStore } from "@/stores/modeStore";

  const props = defineProps({
    element: {
      type: Object,
      required: true
    },
    // mode: {
    //   type: String,
    //   required: true
    // }
  })

  const atomicNo = ref(props.element[0]);
  const name = ref(props.element[2]);
  const atomicMass = ref(props.element[3] + ' u');
  const electronConfig = ref(props.element[5]);
  const atomicRadius = ref(props.element[5] ? props.element[7] + 'pm' : '');
  const meltingPt = ref(props.element[12] ? props.element[12] + ' K' : '');
  const boilingPt = ref(props.element[13] ? props.element[13] + ' K' : '');
  const density = ref(props.element[14]);
  const groupBlock = ref(props.element[15]);
  const yearDiscovered = ref(props.element[16]);

  const element = ref(props.element);

  const updateState = () => {
    // element.value = props.element;
    atomicNo.value = ref(props.element[0]);
    name.value = props.element[2];
    atomicMass.value = props.element[3] + ' u';
    electronConfig.value = props.element[5];
    atomicRadius.value = props.element[5] ? props.element[7] + 'pm' : '';
    meltingPt.value = props.element[12] ? props.element[12] + ' K' : '';
    boilingPt.value = props.element[13] ? props.element[13] + ' K' : '';
    density.value = props.element[14];
    groupBlock.value = props.element[15];
    yearDiscovered.value = props.element[16];
  }
  watch(() => props.element, updateState, { immediate: true })

  const modeStore = useModeStore();
  const mode = computed(() => modeStore.mode);

</script>