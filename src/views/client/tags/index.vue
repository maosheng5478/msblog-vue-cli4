<template>
  <div>
    <div class="t_banner">
      <p class="t_title">{{ $t('message.tags') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Tags',
  setup() {

  },
});
</script>
<style lang="scss">
.t_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4ZUf.jpg') no-repeat fixed center center;
  .t_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
