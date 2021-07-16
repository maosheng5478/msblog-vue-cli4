<template>
  <el-container class="container">
    <el-header class="c_header" :style="data.style">
      <top-bar class="header_main" />
    </el-header>
    <el-main class="c_main">
      <el-backtop visibility-height="5" />
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import TopBar from '@components/client/TopBar';
export default defineComponent({
  name: 'ClientLayout',
  components: {
    TopBar
  },
  setup() {
    const data = reactive({
      style: {},
      opacity: 0,
    });
    const handleWindowScroll = function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      data.opacity = Math.abs(Math.round(scrollTop)) / 250;
      if (data.opacity > 0.85) {
        data.opacity = 0.85;
      }
      data.style = { background: `rgba(255, 255, 255,${data.opacity})` };
    };
    window.addEventListener('scroll', handleWindowScroll);
    onMounted({
    });
    return {
      handleWindowScroll,
      data
    };
  },
});
</script>
<style lang="scss">
.container{
  .c_header{
    background: rgba(255,255,255,0);
    width: 100%;
    position: fixed;
    padding: 0;
    .header_main{
      width: 100%;
      margin-top: 15px;
    }
  }
  .c_main{
    background-color: antiquewhite;
    padding: 0;
  }
}
</style>
