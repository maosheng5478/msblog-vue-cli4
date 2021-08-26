<template>
  <!-- <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="item.path">
        <span
          v-if="item.redirect === 'noRedirect' || index === breadcrumbs.length - 1"
          class="no-redirect"
        >{{ $t('router.' + item.meta.title) }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ $t('router.' + item.meta.title) }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb> -->
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in data.breadlist"  :key="index" :to="{ path: '/admin' }">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, reactive, watch } from 'vue';
import { commonUse } from '../../utils/use';
// import { complie } from 'path-to-regexp';
export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const use = commonUse();
    const data = reactive({
      breadlist: [],
      getBreadcrumb() {
        const matched = use.router.matched;
        data.breadlist = matched;
      }
    });
    watch(
      () => use.router,
      (router) => {
        data.getBreadcrumb();
        console.log(router);
      }
    );
    return {
      use,
      data,
    };
  }
});
</script>

<style>

</style>
