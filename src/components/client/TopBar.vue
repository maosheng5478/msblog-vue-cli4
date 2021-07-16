<template>
  <div class="top">
    <div class="center_container">
      <div class="right_title">
        <router-link
          to="/"
          class="text"
          :style="data.style"
          tag="span">
          {{ $t(`message.title`) }}
        </router-link>
      </div>
      <div>
        <div>
          <router-link>
            <
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';

export default defineComponent({
  name: 'TopBar',
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
      if (data.opacity === 0) {
        data.opacity = 0.9;
        data.style = { color: `rgba(255, 255, 255,${data.opacity})` };
        return;
      }
      data.style = { color: `rgba(25, 25, 25,${data.opacity})` };
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

<style lang="scss" scoped>
.top{
  .center_container{
    width: 100%;
    height: 30px;
    margin: auto;
    text-align: center;
    .text{
      color: rgba(255,255,255,0.9);
      margin-top: 7px;
      margin-left: 20px;
    }
    .text>a{
      text-decoraction: none;
    }
    .text:hover{
      color: #49b1f5 ;
    }
    .router-link-active {
      text-decoration: none;
    }
    .right_title{
      float: left;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
