<template>
  <div>
    <el-menu
      router
      mode="vertical"
      :collapse="isCollapse">
      <div
        v-for="(item,i) in menu"
        :key="i">
        <el-submenu
          v-if="item.children.length !== 0"
          :index="(i).toString()"
          style="text-align: left;">
          <template #title>
            <i :class="item.icon" />
            <span>
              {{ item.nameZh }}
            </span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path">
            <i :class="child.icon" />
            {{ child.nameZh }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="(i).toString()"
          style="text-align: left"
          :key="item.path"
          :route="item.path">
          <i :class="item.icon" />
          <template #title> {{ item.nameZh }}</template>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { commonUse } from '../../utils/use';

export default defineComponent({
  name: 'Menu',
  props: {
    isCollapse: { type: Boolean, default: false },
    menu: { default: [] },
  },
  setup(props) {
    const use = commonUse();
    const data = reactive({
      adminMenus: [],
      collapse: props.isCollapse,
    });
    const handleMenu = function () {
      data.adminMenus = use.store.state.permission_menu;
    };
    const currentPath = function () {
      return use.router.currentRoute;
    };
    handleMenu();
    onMounted(() => {
    });
    return {
      use,
      data,
      currentPath,
      handleMenu,
    };
  }
});
</script>

<style lang="scss">
.el-menu{
  border-right: 0;
}
.data.collapse .el-menu span {
  display: none;
}
/* 解决el-submenu外层嵌套div导致无法正常折叠菜单*/
/*隐藏文字*/
.el-menu--collapse  .el-submenu__title span{
  display: none;
}
/*隐藏 > */
.el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
   display: none;
}
</style>
