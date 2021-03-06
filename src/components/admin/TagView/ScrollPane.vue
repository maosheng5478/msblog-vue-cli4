<template>
  <el-scrollbar
    ref="scrollContainerRef"
    :vertical="false"
    class="scroll-container"
    @wheel.prevent="handleScroll">
    <slot />
  </el-scrollbar>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  computed,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from 'vue';
export default defineComponent({
  name: 'ScrollPane',
  emits: ['scroll'],
  setup(_, { emit }) {
    const scrollContainerRef = ref(null);
    const scrollWrapper = computed(() => {
      return (scrollContainerRef.value).$refs.wrap;
    });
    const { proxy } = getCurrentInstance();
    const tagSpacing = 4;
    const state = reactive({
      handleScroll: (e) => {
        const eventDelta = (e).wheelDelta || -e.deltaY * 40;
        scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollLeft + eventDelta / 4;
      },
      moveToCurrentTag: (currentTag) => {
        const container = (scrollContainerRef.value).$el;
        const containerWidth = container.offsetWidth;
        const tagList = proxy.$parent.$refs.tag;
        let fristTag = null;
        let lastTag = null;

        // find first tag and last tag
        if (tagList.length > 0) {
          fristTag = tagList[0];
          lastTag = tagList[tagList.length - 1];
        }

        if (fristTag === currentTag) {
          scrollWrapper.value.scrollLeft = 0;
        } else if (lastTag === currentTag) {
          scrollWrapper.value.scrollLeft = scrollWrapper.value.scrollWidth - containerWidth;
        } else {
          // find preTag and nextTag
          const currentIndex = tagList.findIndex((item) => item === currentTag);
          const prevTag = tagList[currentIndex - 1];
          const nextTag = tagList[currentIndex + 1];
          // the tag's offsetLeft after of nextTag
          const afterNextTagOffsetLeft =
            nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagSpacing;
          // the tag's offsetLeft before of prevTag
          const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagSpacing;

          if (afterNextTagOffsetLeft > scrollWrapper.value.scrollLeft + containerWidth) {
            scrollWrapper.value.scrollLeft = afterNextTagOffsetLeft - containerWidth;
          } else if (beforePrevTagOffsetLeft < scrollWrapper.value.scrollLeft) {
            scrollWrapper.value.scrollLeft = beforePrevTagOffsetLeft;
          }
        }
      },
    });
    const emitScroll = () => {
      emit('scroll');
    };

    onMounted(() => {
      scrollWrapper.value.addEventListener('scroll', emitScroll, true);
    });

    onBeforeUnmount(() => {
      scrollWrapper.value.removeEventListener('scroll', emitScroll);
    });
    return {
      scrollContainerRef,
      ...toRefs(state),
    };
  }
});
</script>

<style lang="scss" scoped>
.scroll-container {
  .el-scrollbar__bar {
    bottom: 0px;
  }

  .el-scrollbar__wrap {
    height: 49px;
  }
}
.scroll-container {
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
