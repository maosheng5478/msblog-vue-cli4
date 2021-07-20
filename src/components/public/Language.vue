<template>
  <el-dropdown style="margin-left: 20px; color: rgba(255,255,255,0.9)" @command="change">
    <span class="el-dropdown-link">
      {{ $t('message.language') }}<i class="el-icon-arrow-down el-icon--right" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh">中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'Language',
  setup() {
    const data = reactive({
      language: 'zh',
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
