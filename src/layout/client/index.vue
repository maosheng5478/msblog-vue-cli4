<template>
  <el-container class="container">
    <ul class="bg-bubbles">
      <li v-for="(item, index) in data.bubbles" :key="index" />
    </ul>
    <el-header class="c_header" :style="data.style">
      <top-bar class="header_main" />
    </el-header>
    <el-main class="c_main">
      <el-backtop visibility-height="5" />
      <router-view />
    </el-main>
    <el-footer class="c_footer">
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import TopBar from '@components/client/TopBar';
import Footer from '../../components/client/Footer';
export default defineComponent({
  name: 'ClientLayout',
  components: {
    Footer,
    TopBar
  },
  setup() {
    const data = reactive({
      style: {},
      opacity: 0,
      bubbles: 10,
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
    z-index: 999;
    padding: 0;
    .header_main{
      width: 100%;
      margin-top: 15px;
    }
  }
  .c_main{
    background-color: rgba(66, 185, 131, 0.71);
    padding: 0;
  }
  .c_footer{
    margin: 0;
    padding: 0;
  }
}
.bg-bubbles {
    position: fixed;
    top: 0;
    padding: 0;
    left: 0;
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      // bottom 的设置是为了营造出气泡从页面底部冒出的效果；
      bottom: -100px;
      // 默认的气泡大小；
      width: 40px;
      height: 40px;
      background-color: rgba(255, 255, 255, 0.18);
      list-style: none;
      // 使用自定义动画使气泡渐现、上升和翻滚；
      animation: square 15s infinite;
      transition-timing-function: linear;
      // 分别设置每个气泡不同的位置、大小、透明度和速度，以显得有层次感；
      &:nth-child(1) {
        left: 10%;
      }
      &:nth-child(2) {
        left: 20%;
        width: 90px;
        height: 90px;
        animation-delay: 2s;
        animation-duration: 7s;
      }
      &:nth-child(3) {
        left: 25%;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 8s;
        background-color: rgba(255, 255, 255, 0.34);
      }
      &:nth-child(5) {
        left: 70%;
      }
      &:nth-child(6) {
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.38);
      }
      &:nth-child(7) {
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 2s;
      }
      &:nth-child(8) {
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
        animation-duration: 15s;
      }
      &:nth-child(9) {
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 12s;
        background-color: rgba(255, 255, 255, 0.45);
      }
      &:nth-child(10) {
        left: 85%;
        width: 160px;
        height: 160px;
        animation-delay: 5s;
      }
    }
    // 自定义 square 动画；
    @keyframes square {
      0% {
        opacity: 0.5;
        transform: translateY(0px) rotate(45deg);
      }
      25% {
        opacity: 0.75;
        transform: translateY(-400px) rotate(90deg)
      }
      50% {
        opacity: 1;
        transform: translateY(-600px) rotate(135deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-1000px) rotate(180deg);
      }
    }
  }
</style>
