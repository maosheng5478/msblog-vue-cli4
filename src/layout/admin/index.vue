<template>
  <el-container>
    <el-header class="top">
      <admin-header />
    </el-header>
    <el-container :class="{'folded':data.folded}">
      <el-aside class="ly_left">
        <span class="btn_folded" @click="data.folded = !data.folded">
          <i :class="data.folded ? 'el-icon-s-fold' : 'el-icon-s-unfold'" style="color: #888" />
        </span>
      </el-aside>
      <el-container>
        <el-main class="ly_main">
          <router-view />
        </el-main>
        <el-footer class="ly_footer">
          Copyright@2020-2021 by MS
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import AdminHeader from '../../components/admin/AdminHeader.vue';

export default defineComponent({
  components: { AdminHeader },
  name: 'AdminLayout',
  setup() {
    const data = reactive({
      folded: false,
    });
    return { data };
  }
});
</script>

<style scoped lang="scss">
@import "src/style/constant";
.top{
  background-color: #e4e7ed;
  margin: 0;
  padding: 0;
  position: fixed;
  width: 100%;
  .context_header{
    margin: 0;
    padding: 0;
    text-align: center;
  }
}
.ly_main{
  padding: 0;
  margin-left: #{$admin_aside_width};
  background-color: #fff;
  margin-top: #{$admin_header_height};
  transition: margin-left 0.4s;
  -webkit-transition: margin-left 0.4s;
}
.ly_left{
  position: fixed;
  width: #{$admin_aside_width} !important;
  top: #{$admin_header_height};
  height: calc(100vh - 60px);
  background-color: #fff;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
}
.ly_footer{
  padding: 0;
  margin-left: #{$admin_aside_width};
  transition: margin-left 0.4s;
  -webkit-transition: margin-left 0.4s;
}
.btn_folded{
  position: absolute;
  display: block;
  width: 100%;
  height: 40px;
  bottom: 0;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  background-color: #e4e7ed;
  cursor: pointer;
}
.folded .ly_main{
  margin-left: 64px;
}
.folded .ly_left{
  width: 64px !important;
}
.folded .ly_footer{
  margin-left: 64px;
}
</style>
