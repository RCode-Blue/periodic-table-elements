 <template>
  <section 
    :class="tableClasses()">
    <Chip v-for="element in state.elements" 
    :key="element[0]"
    :mode="mode"
    :element="element.Cell" />
    <div class="tick-block">Tick Block</div>
    <ToggleBlock :mode="mode"/>
    <DetailsBlock v-if="state.showDetails" :element="state.elements[state.selectedElement-1].Cell" :mode="mode"/>
    <LegendBlock :mode="mode"/>
  </section>
 </template>

 <script setup lang="ts">
  // import elementsArray from "../data/elementsArray.json";
  import ToggleBlock from "@/components/ToggleBlock.vue";
  import { computed, onMounted, reactive, provide } from 'vue';
  import Chip from "@/components/Chip.vue";
  import DetailsBlock from "@/components/DetailsBlock.vue";
  import LegendBlock from "@/components/LegendBlock.vue";

  import { useModeStore } from "@/stores/modeStore";

 const state = reactive({
  elements:[],
  tableType: 'medium',
  showDetails: false,
  selectedElement: null,
 })

 const modeStore = useModeStore();
 const mode = computed(() => {
  modeStore.mode
 })

  const tableClasses = () => {
    return ["periodic-table", "periodic-table-grid", `${state.tableType}`, `table-${mode.value}`];
  };


 const buildPeriodicTable = async() => {
  const res = await fetch("../src/data/elements.json");
  const data = await res.json();
  state.elements = data.Table.Row;
 };

 onMounted(async () => {
  buildPeriodicTable();
 })


/*
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
  
  */
  const updateSelectedElement = (newSelectedElement: any) => {
    state.selectedElement = newSelectedElement;
    state.showDetails = true;
  }
  provide('updateSelectedElement', updateSelectedElement);


/*
  const updateMode = (newMode: Mode) => {
    state.mode=newMode;
  }
  provide('updateMode', updateMode);


  const modeStore = useModeStore();
  const mode = computed(() => modeStore.mode)



  onMounted(async () => {
    buildPeriodicTable();

  })
*/
</script>