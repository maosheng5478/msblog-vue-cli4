<template>
  <div>
    <div class="ui_banner">
      <p class="ui_title">{{ $t('message.personal_center') }}</p>
    </div>
    <div class="user_info_m">
      is categories
      <br>
      is categories
      <br>
      is categories
      <br>
      is categories
      <br>
      is categories
      <br>
      is categories
      <br>
    </div>
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
.user_info_m{
  max-width: 1200px;
  margin: 48px auto 28px auto;
  padding: 0 5px;
  background-color: #fff;
}
</style>
