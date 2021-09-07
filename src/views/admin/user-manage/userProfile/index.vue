<template>
  <div>
    <el-button type="success" size="small" @click="handleAddUser">{{ $t('message.add_user') }}</el-button>
    <UserForm :tableData="data.tableData" class="u_form" />
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import UserForm from './UserForm.vue';
export default defineComponent({
  name: 'UserProfile',
  components: { UserForm },
  setup() {
    const data = reactive({
      formShow: false,
      tableData: [],
    });
    const handleAddUser = function () {
      data.formShow = true;
    };
    return {
      data,
      handleAddUser,
    };
  }
});
</script>

<style>
.u_form{
  margin-top: 15px;
}
</style>
