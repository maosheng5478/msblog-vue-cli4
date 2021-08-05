<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    <el-form
      ref="formRef"
      :model="data.formData"
      :rules="data.rules"
      label-width="100px">
      <el-row :gutter="14">
        <el-col :span="24">
          <el-form-item label="用户名：" prop="username">
            <el-input
              v-model="data.formData.username"
              placeholder="请输入用户名"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="性别：" prop="sex">
            <el-radio-group v-model="data.formData.sex" size="medium">
              <el-radio
                v-for="(item, index) in data.sexOptions"
                :key="index"
                :label="item.value"
                :disabled="item.disabled">{{ item.label }}</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="邮箱：" prop="email">
            <el-input
              v-model="data.formData.email"
              placeholder="请输入邮箱"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="手机号：" prop="phone">
            <el-input
              v-model="data.formData.phone"
              placeholder="请输入手机号"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0" prop="code">
            <el-input
              v-model="data.formData.code"
              placeholder="验证码"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label-width="0" prop="sendSMS">
            <el-button type="primary" size="medium"> 发送验证码 </el-button>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="个人介绍：" prop="introduction">
            <el-input
              v-model="data.formData.introduction"
              type="textarea"
              placeholder="简单的介绍下自己吧"
              :autosize="{minRows: 4, maxRows: 4}"
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div>
      <el-button @click="close">取消</el-button>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';
import rules from './rules';
export default defineComponent({
  name: 'UserEditForm',
  props: {
    dialogFormVisible: { type: Boolean, default: false },
    title: { type: String, default: '' },
  },
  emits: ['closeForm'],
  setup(props, { emit }) {
    const formRef = ref();
    const data = reactive({
      rules: rules,
      formData: {
        username: '',
        sex: '男',
        email: '',
        phone: '',
        code: '',
        sendSMS: '',
        introduction: '',
      },
      sexOptions: [{
        label: '男',
        value: '男'
      }, {
        label: '女',
        value: '女'
      }],
    });
    function handleConfirm() {
      close();
    }
    function close() {
      emit('closeForm');
      formRef.value.resetFields();
    }
    return {
      data,
      formRef,
      handleConfirm,
      close,
    };
  }
});
</script>

<style>

</style>
