<template>
  <div class="bg">
    <div class="wrapper">a
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
export default defineComponent({
  name: 'Dashboard',
  components: { },
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
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
