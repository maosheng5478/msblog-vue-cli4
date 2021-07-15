<template>
  <div class="top">
    <div class="center_container">
      <div>title</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopBar',
});
</script>

<style lang="scss" scoped>
.top{
  .center_container{
    width: 100%;
    height: 30px;
    margin: auto;
  }
}
</style>
