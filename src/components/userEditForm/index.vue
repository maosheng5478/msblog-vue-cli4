<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    <el-form
      ref="formRef"
      :model="formData"
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
          <el-form-item label="性别：">
            <el-radio-group v-model="data.formData.sex" size="medium">
              <el-radio
                v-for="(item, index) in data.sexOptions"
                :key="index"
                :label="item.label">{{ item.value }}</el-radio>
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
            <el-button
              :type="data.show ? 'primary' : 'info'"
              size="medium"
              @click="getCode"
              :disabled="!data.show">
              <span v-show="data.show">获取验证码</span>
              <span v-show="!data.show" class="count"> {{ data.count }} s</span>
            </el-button>
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
import { ElMessage, ElMessageBox } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';
import { sendSMS } from '../../api/code';
import { userUpdata } from '../../api/user';
import { commonUse } from '../../utils/use';
import rules from './rules';
export default defineComponent({
  name: 'UserEditForm',
  props: {
    dialogFormVisible: { type: Boolean, default: false },
    title: { type: String, default: '' },
    formData: {
      id: 0,
      username: { type: String, default: '' },
      sex: 0,
      email: '',
      phone: '',
      code: '',
      introduction: '',
    },
  },
  emits: ['closeForm'],
  setup(props, { emit }) {
    const formRef = ref();
    const use = commonUse();
    const data = reactive({
      rules: rules,
      show: true,
      count: 0,
      formData: props.formData,
      sexOptions: [{
        label: '1',
        value: '男'
      }, {
        label: '0',
        value: '女'
      }],
    });
    function handleConfirm() {
      ElMessageBox.confirm('是否修改信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        userUpdata(data.formData).then((res) => {
          use.store.commit('setUserId', res.id);
          use.store.commit('setUserPhone', res.phone);
          use.store.commit('setUsername', res.username);
          use.store.commit('setUserEmail', res.email);
          use.store.commit('setUserSex', res.sex);
          use.store.commit('setUserIntroduction', res.introduction);
          use.store.commit('setCreateTime', res.createTime);
          close();
          ElMessage.success({
            message: use.t('message.modified_successfully'),
            duration: 2 * 1000,
          });
        }).catch();
      });
    }
    function close() {
      emit('closeForm');
      formRef.value.resetFields();
    }
    const getCode = function() {
      const param = {
        phone: data.formData.phone
      };
      if (param.phone) {
        sendSMS(param).then(() => {
          ElMessage.success({
            message: use.t('message.sms_send_success'),
            duration: 2 * 1000,
          });
          data.count = 60;
          data.show = false;
          const timer = setInterval(() => {
            if (data.count > 0 && data.count <= 60) {
              data.count--;
            } else {
              clearInterval(timer);
              data.show = true;
            }
          }, 1000);
        }).catch();
      } else {
        ElMessage.error({
          type: 'error',
          message: use.t('message.input_phone'),
          duration: 2 * 1000,
        });
      }
    };
    return {
      data,
      formRef,
      handleConfirm,
      close,
      getCode,
      props,
    };
  }
});
</script>

<style>

</style>
