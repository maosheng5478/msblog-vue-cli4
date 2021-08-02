<template>
  <div class="bg">this is admin home page
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
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style>

</style>
