<template>
  <div>
    <div class="ui_banner">
      <p class="ui_title">{{ $t('message.personal_center') }}</p>
    </div>
    <el-card class="user_info_m">
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
    </el-card>
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
  padding: 50px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
  transition: all 0.3s;
  .el-card__body {
    padding: 0px;
}
}
.user_info_m:hover{
  box-shadow:0 5px 8px 6px rgb(6 16 26 / 12%);
}
</style>
