<template>
  <div>
    <el-button type="success" size="small" @click="handleAddUser">{{ $t('message.add_user') }}</el-button>
    <UserTable
      :tableData="data.tableData"
      @currentPage="handleCurrentPage"
      @sizeChange="handleCurrentPage"
      @edit="handleEdit"
      @deleted="handleDelete"
      @deletedList="handleDeleteList"
      class="u_form" />
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import UserTable from './UserTable.vue';
import { adminUserPage, deletedUser } from '@/api/admin/user-profile';
import { Enum } from '@/utils/enum';
import { ElMessage } from 'element-plus';
import { commonUse } from '@/utils/use';
export default defineComponent({
  name: 'UserProfile',
  components: { UserTable },
  setup() {
    const use = commonUse();
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
      adminUserPage(data.pagination).then((res) => {
        data.tableData = res.list;
        data.tableData.forEach(item => {
          item.sex = Enum.sexEnum[item.sex];
          item.role = Enum.roleEnum[item.role];
        });
      });
    };
    const handleDelete = function (id) {
      deletedUser({ id: id }).then(() => {
        ElMessage.success({
          message: use.t('message.operation_success'),
        });
      });
    };
    const handleCurrentPage = function (pagination) {
      handleUserpage(pagination);
    };
    const handleDeleteList = function () {
      handleUserpage(data.pagination);
    };
    onMounted(() => {
      handleUserpage(data.pagination);
    });
    return {
      data,
      handleAddUser,
      handleUserpage,
      handleCurrentPage,
      handleDelete,
      handleDeleteList,
    };
  }
});
</script>

<style>
.u_form{
  margin-top: 15px;
}
</style>
