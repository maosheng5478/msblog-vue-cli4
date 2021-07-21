<template>
  <div class="text">{{ $t('message.title') }}</div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'AdminHeader',
  setup() {
    const data = reactive({});
    return {
      data,
    };
  },
});
</script>

<style scoped>
.text{
  font-weight: bold;
  font-size: 18px;
  width: 245px;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}

</style>
