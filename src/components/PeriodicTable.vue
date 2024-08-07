 <template>
  <section 
    :class="tableClasses()">
    <Chip v-for="element in state.elements" 
    :key="element[0]"
    :mode="state.mode"
    :element="element.Cell" />
    <div class="tick-block">Tick Block</div>
    <ToggleBlock :mode="state.mode"/>
    <DetailsBlock v-if="state.showDetails" :element="state.elements[state.selectedElement-1].Cell" :mode="state.mode"/>
    <LegendBlock :mode="state.mode"/>
  </section>
 </template>

 <script setup lang="ts">
  // import elementsArray from "../data/elementsArray.json";
  import ToggleBlock from "@/components/ToggleBlock.vue";
  import { onMounted, reactive, provide } from 'vue';
  import Chip from "@/components/Chip.vue";
  import DetailsBlock from "@/components/DetailsBlock.vue";
  import LegendBlock from "@/components/LegendBlock.vue";

  type Mode = 'light' | 'dark';
  type TableType = 'medium' | 'long';

  const state = reactive({
    elements:[],
    mode: "light" as Mode,
    tableType: 'medium' as TableType,
    showDetails: false as Boolean,
    selectedElement: null as any
  })

  const tableClasses = ()=> {
    return ["periodic-table", "periodic-table-grid", `${state.tableType}`, `table-${state.mode}`]
  }

  const buildPeriodicTable = async() => {
    // TODO: try/catch
    // TODO: alias http://...
    const res = await fetch("../src/data/elements.json");
    const data = await res.json();
    state.elements = data.Table.Row;
  }

  const updateSelectedElement = (newSelectedElement: any) => {
    state.selectedElement = newSelectedElement;
    state.showDetails = true;
  }
  provide('updateSelectedElement', updateSelectedElement);

  const updateMode = (newMode: Mode) => {
    state.mode=newMode;
  }
  provide('updateMode', updateMode);

  onMounted(async () => {
    buildPeriodicTable();

  })

</script>