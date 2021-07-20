<template>
  <div>
    <div class="c_banner">
      <h1 class="el-icon-back">{{ $t('message.categories') }}</h1>
    </div>
    this is categories
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Categories'
});
</script>

<style scoped>
.c_banner{
  height: 100vh;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4nPS.jpg') no-repeat center center;
}
</style>
