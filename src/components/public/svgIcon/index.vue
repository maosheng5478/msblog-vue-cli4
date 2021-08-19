<template>
  <svg
    class="svgIcon"
    :class="[className, { pointer }]"
    :style="{ '--icon-color': color, '--icon-size': variables[iconSize] }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { computed, defineComponent } from 'vue';
import variables from '@/style/variables.scss';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    color: String,
    className: String,
    size: String,
    pointer: Boolean
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    const iconSize = computed(() => `SIZE_${props.size?.toUpperCase()}`);

    return {
      iconName,
      iconSize,
      variables
    };
  }
});
</script>

<style lang="scss">
.svgIcon {
  width: 1em;
  height: 1em;
  overflow: hidden;
  fill: var(--icon-color);
  font-size: var(--icon-size);

  &.pointer {
    cursor: pointer;
  }
}
</style>
