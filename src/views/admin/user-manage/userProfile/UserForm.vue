<template>
  <el-card>
    <el-table :data="tableData">
      <el-table-column type="selection" width="55" />
      <el-table-column type="index" width="50" />
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
            编辑
          </el-button>
          <el-button
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin: 20px 0 20px 0;float: left">
      <el-button>取消选择</el-button>
      <el-button>批量删除</el-button>
    </div>
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[5,10]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    />
  </el-card>
</template>

<script>
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'UserForm',
  props: {
    tableData: [],
  },
  setup() {
    const data = reactive({
    });
    return {
      data,
    };
  }
});
</script>

<style>

</style>
