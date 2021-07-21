<template>
  <div>
    <div class="home-banner" />
    <el-button @click="toAdmin" style="position: sticky"> to admin</el-button>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    yar<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import router from '../../../router';

export default {
  name: 'Home',
  components: { },
  setup() {
    function toAdmin() {
      router.replace('/admin');
    }
    return { toAdmin };
  },
};
</script>

<style scoped>
.home-banner {
  left: 0;
  right: 0;
  height: 100vh;
  background: #fff url("https://z3.ax1x.com/2021/07/15/WmhmQA.jpg") no-repeat fixed center center;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
}
</style>
