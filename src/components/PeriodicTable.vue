 <template>
  <section 
    :class="tableClasses()">
    <Chip v-for="element in state.elements" 
      :key="element.Cell[0]"
      :mode="mode"
      :element="element.Cell" />
    <ToggleBlock :mode="mode"/>
    <DetailsBlock 
      v-if="state.showDetails && state.selectedElement" 
      :element="state.elements[state.selectedElement-1].Cell" 
      :mode="mode"/>
    <LegendBlock :mode="mode"/>
    <div class="sp-spacer"></div>
  </section>
 </template>

 <script setup lang="ts">
  import ToggleBlock from "@/components/ToggleBlock.vue";
  import { computed, onMounted, reactive, provide } from 'vue';
  import Chip from "@/components/Chip.vue";
  import DetailsBlock from "@/components/DetailsBlock.vue";
  import LegendBlock from "@/components/LegendBlock.vue";
  import elementsData from "@/data/elements.json";

  import { useModeStore } from "@/stores/modeStore";

  type Element = {
    Cell: string[],
  }

  const state = reactive({
    elements:[] as Element[],
    tableType: 'medium',
    showDetails: false,
    selectedElement: null,
  })

  const modeStore = useModeStore();
  const mode = computed(() => {
    return modeStore.mode
  })

  const tableClasses = () => {
    const classes = ["periodic-table", "periodic-table-grid", `${state.tableType}`, `table-${mode.value}`];
    return classes;
  };

  onMounted( () => {
    state.elements = elementsData.Table.Row;
  })

  const updateSelectedElement = (newSelectedElement: any) => {
    state.selectedElement = newSelectedElement;
    state.showDetails = true;
  }
  provide('updateSelectedElement', updateSelectedElement);
</script>