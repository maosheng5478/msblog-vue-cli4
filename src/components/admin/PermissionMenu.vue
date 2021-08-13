<template>
  <div>
    <el-menu
      router
      mode="vertical"
      :collapse="isCollapse">
      <div
        v-for="(item,i) in data.adminMenus"
        :key="i">
        <el-submenu
          v-if="item.children.length !== 0"
          :index="(i).toString()"
          style="text-align: left;">
          <template #title>
            <span>
              <i :class="item.icon" />
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
          {{ item.nameZh }}
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { getMenu } from '@/api/menu';
import { formatRoutes } from '../../utils/asyncRouters';
import { commonUse } from '../../utils/use';

export default defineComponent({
  name: 'Menu',
  props: {
    isCollapse: { type: Boolean, default: false },
  },
  setup() {
    const use = commonUse();
    const router = use.router;
    const data = reactive({
      adminMenus: use.store.getters.getPermissionMenu,
    });
    const handleMenu = function () {
      getMenu().then(res => {
        const fmtRoutes = formatRoutes(res);
        fmtRoutes.forEach(item => {
          router.addRoute(item);
        });
        // data.adminMenus = fmtRoutes;
      }).catch();
    };
    const currentPath = function () {
      return use.router.currentRoute;
    };
    handleMenu();
    console.log(use.store.getters.getPermissionMenu);
    return {
      use,
      data,
      currentPath,
      handleMenu,
    };
  }
});
</script>

<style>

</style>
