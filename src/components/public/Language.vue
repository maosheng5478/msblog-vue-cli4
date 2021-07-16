<template>
  <el-radio
    v-model="data.language"
    label="zh"
    border
    @change="change('zh')">中文（简体）</el-radio>
  <el-radio
    v-model="data.language"
    label="en"
    border
    @change="change('en')">English</el-radio>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'Language',
  setup() {
    const data = reactive({
      language: '',
      title: '',
    });
    const { proxy } = getCurrentInstance();
    function change(type) {
      proxy.$i18n.locale = type;
      data.language = proxy.$i18n.locale;
    }
    const { t } = useI18n();
    data.title = t('message.title');
    return { change, data };
  },
});
</script>

<style scoped>

</style>
