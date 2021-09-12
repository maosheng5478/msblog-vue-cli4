<template>
  <div>
    <el-button type="success" size="small" @click="handleAddUser">{{ $t('message.add_user') }}</el-button>
    <UserForm
      :tableData="data.tableData"
      @currentPage="handleCurrentPage"
      @sizeChange="handleCurrentPage"
      class="u_form" />
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
      pagination: {
        page: 1,
        size: 5,
      }
    });
    const handleAddUser = function () {
      data.formShow = true;
    };
    const handleUserpage = function (pagination) {
      data.pagination = pagination;
      console.log(pagination);
      adminUserPage(data.pagination).then((res) => {
        data.tableData = res.list;
        data.tableData.forEach(item => {
          item.sex = Enum.sexEnum[item.sex];
          item.role = Enum.roleEnum[item.role];
        });
      });
    };
    const handleCurrentPage = function (pagination) {
      handleUserpage(pagination);
    };
    onMounted(() => {
      handleUserpage(data.pagination);
    });
    return {
      data,
      handleAddUser,
      handleUserpage,
      handleCurrentPage,
    };
  }
});
</script>

<style>
.u_form{
  margin-top: 15px;
}
</style>
