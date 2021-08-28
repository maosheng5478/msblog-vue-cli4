<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in data.breadlist"  :key="index">
      <span v-if="index !== data.breadlist.length-1" class="no-redirect">
        <router-link to="/admin/dashboard">
          {{ $t('router.' + item.meta.tag) }}
        </router-link>
      </span>
      <a v-else>{{ $t('router.' + item.meta.tag) }}</a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from 'vue';
import { commonUse } from '../../utils/use';
export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const use = commonUse();
    const route = use.route;
    const data = reactive({
      breadlist: [],
      getBreadcrumb() {
        const matched = route.matched;
        data.breadlist = matched;
        // if (data.breadlist[0].path === '/admin') {
        //   data.breadlist.pop();
        // }
      }
    });
    function handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        use.router.push(redirect);
        return;
      }
      console.log(path);
    }
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
      handleLink,
      ...toRefs(data),
    };
  }
});
</script>

<style lang="scss">
.el-breadcrumb__inner,
.el-breadcrumb__inner a {
  font-weight: 400 !important;
}

.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
