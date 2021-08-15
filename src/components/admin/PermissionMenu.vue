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
    });
    const handleMenu = function () {
      data.adminMenus = use.store.state.permission_menu;
      console.log('pe', use.store.state.permission_menu);
      console.log('data', props.menu);
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

<style>

</style>
