<template>
  <div>
    dsad
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getMenu } from '@/api/menu';

export default defineComponent({
  name: 'Menu',
  setup() {
    const handleMenu = function () {
      getMenu().then(res => {

      }).catch();
    };
    handleMenu();
    return { };
  }
});
</script>

<style>

</style>
