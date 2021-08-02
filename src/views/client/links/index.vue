<template>
  <div>
    <div class="l_banner">
      <p class="l_title">{{ $t('message.links') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Links',
  setup() {

  },
});
</script>
<style lang="scss">
.l_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN41rn.jpg') no-repeat fixed center center;
  // 七牛云地址 http://qx3pvuxg3.hn-bkt.clouddn.com/kristaps-ungurs-7lueNHlgG1w.jpg
  .l_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
