<template>
  <div>
    <div class="c_banner">
      <p class="c_title">{{ $t('message.categories') }}</p>
    </div>
    this is categories
    <i class="el-icon-delete" />
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Categories',
  setup() {
    return { };
  },
});
</script>

<style lang="scss" scoped>
.c_banner{
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4nPS.jpg') left top no-repeat;
  .c_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
