<template>
  <div>
    <div class="home-banner">
      <h3 class="title">欢迎来到我的个人网站</h3>
      <h3 class="titles">今天也要加油鸭</h3>
    </div>
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

<style scoped lang="scss">
.home-banner {
  left: 0;
  right: 0;
  height: 100vh;
  background: #fff url("https://z3.ax1x.com/2021/07/15/WmhmQA.jpg") no-repeat fixed center center;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 300px;
    margin: auto;
    bottom: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
}

.titles {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 350px;
    margin: auto;
    bottom: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
}
}
</style>
