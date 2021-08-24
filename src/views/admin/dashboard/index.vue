<template>
  <div class="bg">this is admin home page
    <div class="wrapper">
      <BarChart class="chart" />
    </div>
    <br><br><br><br><br><br><br><br><br>hi
    <br><br><br><br><br><br><br><br><br>hi
    <br><br><br><br><br><br><br><br><br>hi
    <br><br><br><br><br><br><br><br><br>hi
    <br><br><br><br><br><br><br><br><br>hi
    <br><br><br><br><br><br><br><br><br>hi
  </div>

</template>

<script>
import { defineComponent, reactive } from 'vue';
import BarChart from './components/barChart';
export default defineComponent({
  name: 'Dashboard',
  components: { BarChart },
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style>
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
