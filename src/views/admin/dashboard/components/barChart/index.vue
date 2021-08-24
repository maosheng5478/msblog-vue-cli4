<template>
  <charts :options="barChartOptions()" />
</template>

<script>
import { defineComponent } from 'vue';
import barChartOptions from './barChartOptions.js';
export default defineComponent({
  name: 'BarChart',
  components: { },
  setup() {
    return {
      barChartOptions
    };
  }
});
</script>

<style>

</style>
