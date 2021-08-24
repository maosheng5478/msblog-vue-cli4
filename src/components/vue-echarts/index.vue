<template>
  <div class="container" ref="container" />
</template>

<script setup>
import { ref, onMounted, defineProps, toRefs, watch } from 'vue';
import * as echarts from 'echarts';

const container = ref(null);
const chart = ref(null);

const props = defineProps({
  options: {
    type: Object,
    default: () => {},
    required: true,
  },
});
onMounted(() => {
  chart.value = echarts.init(container.value);
  chart.value.setOption(props.options);
});
const { options } = toRefs(props);

watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions);
  },
  { deep: true }
);
</script>

<style>
.container {
  width: 100%;
  height: 100%;
}
</style>
