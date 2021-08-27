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
      <span v-if="index == data.breadlist.length-1" class="no-redirect">{{ item.meta.tag }}</span>
      <a v-else @click.prevent="handleLink(item)">{{ item.meta.tag }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import { commonUse } from '../../utils/use';
import { useRoute } from 'vue-router';
// import { complie } from 'path-to-regexp';
export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const use = commonUse();
    const route = useRoute();
    const data = reactive({
      breadlist: [],
      getBreadcrumb() {
        const matched = route.matched;
        data.breadlist = matched;
        console.log(matched);
      }
    });
    onMounted(() => {
      data.getBreadcrumb();
    });
    watch(
      () => route.matched,
      (newVal, oldVal) => {
        data.getBreadcrumb();
      }
    );
    return {
      use,
      data,
      ...toRefs(data),
    };
  }
});
</script>

<style>

</style>
