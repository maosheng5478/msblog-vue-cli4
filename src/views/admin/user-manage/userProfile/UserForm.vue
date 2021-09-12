<template>
  <el-card>
    <el-table :data="tableData" stripe ref="tableRef">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" :label="$t('message.No')" />
      <el-table-column property="id" label="id" />
      <el-table-column property="username" :label="$t('message.username')" />
      <el-table-column property="sex" :label="$t('message.sex')" />
      <el-table-column property="email" :label="$t('message.email')" />
      <el-table-column property="phone" :label="$t('message.phone')" />
      <el-table-column property="role" :label="$t('message.role')" />
      <el-table-column
        :label="$t('message.operation')"
        fixed="right"
        width="120">
        <template #default="scope">
          <el-button
            @click="editUser(scope.row)"
            type="text"
            size="small">
            {{ $t('message.edit') }}
          </el-button>
          <el-button
            @click="deleteUser(scope.row)"
            type="text"
            size="small">
            {{ $t('message.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="form_bottom">
      <div class="bot_btn">
        <el-button size="small" @click="handleDeselect">{{ $t('message.deselect') }}</el-button>
        <el-button size="small" @click="handleDeleteList">{{ $t('message.batch_delete') }}</el-button>
      </div>
      <el-pagination
        class="bot_page"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10]"
        :page-size="5"
        :pager-count="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100"
      />
    </div>
  </el-card>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  name: 'UserForm',
  props: {
    tableData: [],
    currentPage: { type: Number, defualt: 1 }
  },
  emits: [
    'sizeChange',
    'currentPage',
    'edit',
    'deleted'
  ],
  setup(prop, { emit }) {
    const data = reactive({
      pagination: {
        size: 5,
        page: 1
      }
    });
    const tableRef = ref();
    const handleSizeChange = function(size) {
      console.log(size);
      data.pagination.size = size;
      emit('currentPage', data.pagination);
    };
    const handleCurrentChange = function(page) {
      data.pagination.page = page;
      console.log(data);
      emit('currentPage', data.pagination);
    };
    const editUser = function (params) {
      console.log(params);
      emit('edit', params);
    };
    const deleteUser = function (params) {
      emit('deleted', params.id);
    };
    const handleDeselect = function () {
      tableRef.value.clearSelection();
    };
    return {
      data,
      handleSizeChange,
      handleCurrentChange,
      editUser,
      deleteUser,
      tableRef,
      handleDeselect,
    };
  }
});
</script>

<style lang="scss">
.form_bottom{
  overflow:hidden;
  padding: 10px 0 0;
  .bot_btn{
    float: left
  }
  .bot_page{
    float: right;
  }
}
</style>
