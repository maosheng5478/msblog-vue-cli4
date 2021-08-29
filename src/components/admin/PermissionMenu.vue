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
              {{ $t('router.'+item.nameZh) }}
            </span>
          </template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="child.path"
            @click="handleClick(child)">
            <i :class="child.icon" />
            {{ $t('router.'+child.nameZh) }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item
          v-else
          :index="(i).toString()"
          style="text-align: left"
          :key="item.path"
          @click="handleClick(item)"
          :route="item.path">
          <i :class="item.icon" />
          <template #title> {{ $t('router.'+item.nameZh) }}</template>
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
    function handleClick(item) {
      const tabs = {
        path: item.path,
        name: item.nameZh,
        label: use.t('router.' + item.nameZh),
      };
      use.store.commit('selectMenu', tabs);
    }
    handleMenu();
    onMounted(() => {
    });
    return {
      use,
      data,
      handleClick,
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
