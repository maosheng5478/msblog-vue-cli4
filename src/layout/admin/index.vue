<template>
  <el-container>
    <el-header class="top">
      <admin-header />
    </el-header>
    <el-container :class="{'folded':data.folded}">
      <el-aside class="ly_left">
        <el-scrollbar>
          <permission-menu class="ly_menu" :menu="data.menu" :isCollapse="data.folded" />
        </el-scrollbar>
        <span class="btn_folded" @click="data.folded = !data.folded">
          <i :class="data.folded ? 'el-icon-s-fold' : 'el-icon-s-unfold'" style="color: #888" />
        </span>
      </el-aside>
      <el-container class="other_as">
        <el-main class="ly_main">
          <router-view v-slot="{ Component }">
            <transition name="el-fade-in" :duration="1000">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
        <el-footer class="ly_footer">
          Copyright@2020-2021 by MS
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import AdminHeader from '@/components/admin/AdminHeader.vue';
import PermissionMenu from '../../components/admin/PermissionMenu.vue';
import { commonUse } from '../../utils/use';

export default defineComponent({
  components: { AdminHeader, PermissionMenu },
  name: 'AdminLayout',
  setup() {
    const use = commonUse();
    const data = reactive({
      folded: false,
      menu: [],
    });
    onMounted(() => {
    });
    data.menu = use.store.state.permission_menu;
    return {
      data,
      use,
    };
  },
});
</script>

<style scoped lang="scss">
@import "src/style/constant";
.top{
  background-color: #e4e7ed;
  margin: 0;
  padding: 0;
  z-index: 999;
  position: fixed;
  width: 100%;
  .context_header{
    margin: 0;
    padding: 0;
    text-align: center;
    position: fixed;
  }
}
.ly_main{
  padding: 0;
  min-height: calc(100vh - 60px);
  margin-left: #{$admin_aside_width};
  background-color: #f0f2f5;
  margin-top: #{$admin_header_height};
  transition: margin-left 0.4s;
  -webkit-transition: margin-left 0.4s;
}
.other_as{
  background-color: #f0f2f5;
}
.ly_left{
  position: fixed;
  padding: 0;
  width: #{$admin_aside_width} !important;
  top: #{$admin_header_height};
  height: calc(100vh - 60px);
  background-color: #fff;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
  .ly_menu{
    padding-bottom: 40px;
  }
}
.ly_footer{
  padding: 0;
  margin-left: #{$admin_aside_width};
  transition: margin-left 0.4s;
  background-color: #f0f2f5;
  -webkit-transition: margin-left 0.4s;
}
.btn_folded{
  position: fixed;
  display: block;
  width: #{$admin_aside_width};
  height: 40px;
  bottom: 0;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  background-color: #e4e7ed;
  cursor: pointer;
  transition: width 0.4s;
  -webkit-transition: width 0.4s;
}
.folded .ly_main{
  margin-left: 64px;
}
.folded .btn_folded{
  width: 64px !important;
}
.folded .ly_left{
  width: 64px !important;
}
.folded .ly_footer{
  margin-left: 64px;
}
</style>
