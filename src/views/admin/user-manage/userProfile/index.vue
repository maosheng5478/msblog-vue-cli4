<template>
  <div>
    <el-button type="success" size="small" @click="handleAddUser">{{ $t('message.add_user') }}</el-button>
    <UserForm :tableData="data.tableData" class="u_form" />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import UserForm from './UserForm.vue';
import { adminUserPage } from '@/api/admin/user-profile';
import { Enum } from '@/utils/enum';
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
    const handleUserpage = function () {
      adminUserPage().then((res) => {
        data.tableData = res.list;
        data.tableData.forEach(item => {
          item.sex = Enum.sexEnum[item.sex];
          item.role = Enum.roleEnum[item.role];
        });
        console.log(res);
      });
    };
    onMounted(() => {
      handleUserpage();
    });
    return {
      data,
      handleAddUser,
      handleUserpage,
    };
  }
});
</script>

<style>
.u_form{
  margin-top: 15px;
}
</style>
