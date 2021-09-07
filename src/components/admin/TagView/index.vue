<template>
  <div>
    <ScrollPane
      ref="scrollPaneRef"
      class="tags-view-wrapper"
      @scroll="handleScroll"
    >
      <el-tag
        :key="tag.name"
        size="medium"
        type="light"
        v-for="(tag, index) in tags"
        :closable="tag.name !== 'dashboard'"
        :disable-transitions="false"
        @close="handleClose(tag, index)"
        @click="changeMenu(tag)"
        :effect="handleEffect(tag)"
      >
        {{ $t('router.'+ tag.name) }}
      </el-tag>
    </ScrollPane>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
} from 'vue';
import { commonUse } from '../../../utils/use';
import ScrollPane from './ScrollPane.vue';
export default defineComponent({
  name: 'TagView',
  components: { ScrollPane },
  setup() {
    const use = commonUse();
    const scrollPaneRef = ref(null);
    const state = reactive({
      handleScroll() {},
      handleClose(tag, index) {
        const length = this.tags.length - 1;
        use.store.commit('closeTab', tag);
        if (tag.name !== use.router.currentRoute.value.meta.title) {
          return;
        }
        if (index === length) {
          use.router.push(tags[index - 1].path);
        } else {
          // 否则往右边跳转
          use.router.push(tags[index].path);
        }
      },
      changeMenu(item) {
        use.router.push(item.path);
        use.store.commit('selectMenu', item);
      },
      handleEffect(tag) {
        let path = use.route.path;
        if (path === '/admin/dashboard') {
          path = '/admin';
        }
        return path === tag.path ? 'dark' : 'plain';
      }
    });
    const tags = use.store.state.tagView.tabsList;
    return {
      use,
      tags,
      scrollPaneRef,
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss">
.el-tag + .el-tag {
  margin-left: 10px;
}
.el-scrollbar__view{
  text-align: left;
}
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      vertical-align: 2px;
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform-origin: 100% 50%;

      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }

      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
