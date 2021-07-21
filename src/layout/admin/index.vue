<template>
  <el-container>
    <el-header class="admin_header">
      <admin-header />
    </el-header>
    <el-container :class="{'folded':data.folded}">
      <el-aside class="admin_aside">
        <span class="btn_folded" @click="data.folded = !data.folded">
          <i :class="data.folded ? 'el-icon-s-fold' : 'el-icon-s-unfold'" style="color: #888" />
        </span>
      </el-aside>
      <el-container>
        <el-main class="admin_main">
          <router-view />
        </el-main>
        <el-footer class="admin_footer">
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
      folded: true,
    });
    return { data };
  }
});
</script>

<style scoped lang="scss">
.admin_header{
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
.admin_main{
  padding: 0;
  margin-left: 245px;
  background-color: #888888;
  margin-top: 60px;
  transition: margin-left 0.4s;
  -webkit-transition: margin-left 0.4s;
}
.admin_aside{
  position: fixed;
  width: 245px !important;
  top: 60px;
  height: calc(100vh - 60px);
  background-color: #fff;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
}
.admin_footer{
  padding: 0;
  margin-left: 245px;
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
.folded .admin_main{
  margin-left: 64px;
}
.folded .admin_aside{
  width: 64px !important;
}
.folded .admin_footer{
  margin-left: 64px;
}
</style>
