<template>
  <div>
    <div class="ui_banner">
      <p class="ui_title">{{ $t('message.personal_center') }}</p>
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
.ui_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WNTxpT.jpg') no-repeat fixed center center;
  .ui_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
