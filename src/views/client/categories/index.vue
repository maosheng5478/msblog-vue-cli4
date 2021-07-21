<template>
  <div>
    <div class="c_banner">
      <p class="e_title">{{ $t('message.categories') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Categories',
  setup() {
    return { };
  },
});
</script>

<style lang="scss" scoped>
.c_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WN4nPS.jpg') left top no-repeat;
  .e_title{
    color: #fff;
    display:block;
    margin-top: 400px;
  }
}
#demo{
  position: relative;
  width: 200px;
  height: 100px;
  background-color: #fff;
  border: 8px solid #666;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  -webkit-box-shadow: 2px 2px 4px #888;
  -moz-box-shadow: 2px 2px 4px #888;
  box-shadow: 2px 2px 4px #888;
}
#demo:before{
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: 30px;
  top: 100px;
  border: 25px solid;
  border-color: #666 transparent transparent #666;
}
#demo:after{
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
  left: 38px;
  top: 100px;
  border: 15px solid;
  border-color: #fff transparent transparent #fff;
}

</style>
