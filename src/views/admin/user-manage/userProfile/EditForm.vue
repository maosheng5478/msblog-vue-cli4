<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    <el-row :gutter="14">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="100px">
        <el-col :span="24">
          <el-form-item label="id：" prop="id">
            <el-input
              v-model="formData.id"
              placeholder="id"
              readonly
              :disabled='true'
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="用户名：" prop="username">
            <el-input
              v-model="formData.username"
              placeholder="请输入用户名"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="性别：" prop="sex">
            <el-radio-group v-model="formData.sex" size="medium">
              <el-radio
                v-for="(item, index) in sexOptions"
                :key="index"
                :label="item.value"
                :disabled="item.disabled">
                {{  item.label }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="邮箱：" prop="email">
            <el-input
              v-model="formData.email"
              placeholder="请输入邮箱"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="手机号：" prop="phone">
            <el-input
              v-model="formData.phone"
              placeholder="请输入手机号"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户角色" prop="role">
            <el-select
              v-model="formData.role"
              placeholder="请选择用户角色"
              clearable
              :style="{width: '100%'}">
              <el-option
                v-for="(item, index) in roleOptions"
                :key="index"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
    <div>
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="handelConfirm">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import { isName } from '@/utils/validate';
import Props from './props';
export default defineComponent({
  name: 'EditForm',
  props: {
    ...Props,
  },
  setup() {
    const data = reactive({

    });
    const formRef = ref();
    const formData = reactive({
      id: 0,
      username: '',
      sex: 0,
      email: '',
      phone: '',
      role: 3,
    });
    return {
      data,
      isName,
      formRef,
      formData,
    };
  }
});
</script>

<style>

</style>
