<template>
  <div>
    <div class="a_banner">
      <p class="a_title">{{ $t('message.about') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  setup() {

  },
});
</script>
""
<style lang="scss">
.a_banner{
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4VVP.jpg') no-repeat fixed center center;
  .a_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
