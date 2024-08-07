<template>
  <div :class="getChipClasses()">
    <button class="chip-btn" @click="selectChip">
        <div class="chip-content__line-1">
          <div class="left">{{atomicNo}}</div>
          <div class="right">{{atomicMass}}</div>
        </div>
        <div class="chip-content__line-2 center">{{symbol}}</div>
        <div class="chip-content__line-3 center">{{name}}</div>
      </button>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, inject, watch, ref } from 'vue';

  const props = defineProps({
    mode: {
      type: String,
      required: true
    },
    element: {
      type: Object, 
      required: true
    }
  })

  const ntpTemperature = 293.15; // Kelvins
  const ntpPressure = 101.325; // KPascals (1 atm)
  let physicalState = "";

  const atomicNo = ref(parseInt(props.element[0]));
  const symbol = ref(props.element[1]);
  const name = ref(props.element[2]);
  const atomicMass = ref(parseFloat(props.element[3]).toFixed(2).toString());
  const meltingPoint = ref(props.element[12]); // Kelvins
  const boilingPoint = ref(props.element[13]); // Kelvins

  const updateState = () => {
    atomicNo.value = parseInt(props.element[0]);
    symbol.value = props.element[1];
    name.value = props.element[2];
    atomicMass.value = parseFloat(props.element[3]).toFixed(2).toString();
    meltingPoint.value = props.element[12]; // Kelvins
    boilingPoint.value = props.element[13]; // Kelvins

    if(meltingPoint.value && ntpTemperature < meltingPoint.value) {
      physicalState = "solid"
    } else if( (meltingPoint.value && ntpTemperature > meltingPoint.value) && (boilingPoint.value && ntpTemperature < boilingPoint.value) ) {
      physicalState = "liquid"
    } else if ( (boilingPoint.value && ntpTemperature > boilingPoint.value) ){
      physicalState = "gas"
    } else {
      physicalState = "unknown"
    }
  }
  watch(()=> props.element, updateState, {immediate:true})

  const getChipClasses = () => {
    let chipClasses =  ["chip", `chip-${atomicNo.value}`, `chip-${props.mode}`, `chip-state--${physicalState}` ];

    // s-block
    const sBlockNos = [1, 2, 3, 4, 11, 12, 19, 20, 37, 38, 55, 56, 87, 88];
    if(sBlockNos.some(number => number === atomicNo.value) ) {
      chipClasses.push("chip-s-block");
    }

    // f-block
      if((atomicNo.value >= 57 && atomicNo.value <= 71)){
        chipClasses.push("chip-f-block", "chip-f-block-1");
    }

    if((atomicNo.value >= 89 && atomicNo.value <= 103)){
      chipClasses.push("chip-f-block", "chip-f-block-2");
    }

    // d-block
    if(atomicNo.value >= 21 && atomicNo.value <30 ||
      atomicNo.value >= 39 && atomicNo.value <=48 ||
      atomicNo.value >= 72 && atomicNo.value <=80 ||
      atomicNo.value >= 104 && atomicNo.value <=112
    ){
      chipClasses.push("chip-d-block");
    }

    // p-block
    if(atomicNo.value >= 5 && atomicNo.value <= 10 ||
      atomicNo.value >= 13 && atomicNo.value <= 18 ||
      atomicNo.value >= 30 && atomicNo.value <= 36 ||
      atomicNo.value >= 48 && atomicNo.value <= 54 ||
      atomicNo.value >= 80 && atomicNo.value <= 86 ||
      atomicNo.value >= 112 && atomicNo.value <= 118
    ){
      chipClasses.push("chip-p-block");
    }


    return chipClasses;
  }

  const updateSelectedElement = inject('updateSelectedElement') as (atomicNo:number) => void;
  const selectChip = ()=>{
    updateSelectedElement(atomicNo.value)
  }

</script>