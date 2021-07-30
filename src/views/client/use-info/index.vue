<template>
  <div>
    <div class="c_banner">
      <p class="e_title">{{ $t('message.categories') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'UserInfo',
  setup() {

  },
});
</script>
""
<style lang="scss">
.c_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4nPS.jpg') left top no-repeat;
  .e_title{
    color: #fff;
    display:block;
    margin-top: 400px;
  }
}
</style>
