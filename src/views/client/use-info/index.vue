<template>
  <div>
    <div class="ui_banner">
      <p class="ui_title">{{ $t('message.personal_center') }}</p>
    </div>
    <el-card class="user_info_m">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getUsername }}
          </p>
          <span><el-tag size="small" type="warning">{{ use.store.getters.getUserSex }}</el-tag></span>
        </el-col>
        <el-col :span="2"> <el-tag effect="dark">系统管理员</el-tag></el-col>
      </el-row>
    </el-card>
    <el-card class="user_info_o">
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="title_info">用户信息 </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font" />
        <el-col :span="2" class="text_el-col name-font">
          <el-button type="text" icon="el-icon-edit" @click="data.dialogFormVisible = true">{{ $t('message.edit') }}</el-button>
          <user-edit-form title="sss" v-model="data.dialogFormVisible" :form-data="data.formData" />
        </el-col>
      </el-row>
      <!-- 分割线 -->
      <el-divider />
      <el-row :gutter="20">
        <el-col :span="4">
          <p  class="left_title"> {{ $t('message.phone') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getPhone }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p  class="left_title"> {{ $t('message.email') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getEmail }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="left_title"> {{ $t('message.registration_time') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getUserCreateTime }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="left_title"> {{ $t('message.introduction') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getUserIntroduction }}
          </p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { commonUse } from '../../../utils/use';
import userEditForm from '../../../components/userEditForm';
export default defineComponent({
  name: 'UserInfo',
  components: { userEditForm },
  setup() {
    const use = commonUse();
    const data = reactive({
      userName: { type: String, default: 'username' },
      dialogFormVisible: false,
      formData: {
        username: use.store.getters.getUsername,
        sex: use.store.getters.getUserSex,
        email: use.store.getters.getEmail,
        phone: use.store.getters.getPhone,
        code: '',
        introduction: use.store.getters.getUserIntroduction,
      },
    });
    const loadUserInfo = function() {
      if (use.store.getters.getUserName) {
        data.userName = use.store.getters.getUsername;
      }
    };
    onMounted(() => {
      loadUserInfo();
    });
    return {
      data,
      use,
    };
  },
});
</script>

<style lang="scss">
.ui_banner{
  height: 100vh;
  overflow: hidden;
  background: #fff url('https://z3.ax1x.com/2021/07/20/WNTxpT.jpg') no-repeat fixed center center;
  .ui_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
.user_info_m{
  max-width: 1200px;
  margin: 48px auto 28px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 4px rgb(7 17 27 / 6%);
  transition: all 0.3s;
  .name-p{
    margin-top: 8px;
  }
  .text_el-col{
    text-align: left;
  }
  .name-font{
    font-family: 'PingFang SC';
    font-size: 18px;
  }
}
.user_info_o{
  max-width: 1200px;
  margin: 0 auto 28px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px 6px rgb(7 17 27 / 6%);
  transition: all 0.3s;
  .text_el-col{
    text-align: left;
  }
  .el-divider{
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .title_info{
    font-family: 'PingFang SC';
    font-size: 20px;
    font-weight: bold;
  }
  .left_title{
    text-align: left;
    margin-left: 20px;
  }
}
.user_info_o:hover{
  box-shadow:0 5px 8px 6px rgb(6 16 26 / 12%);
}
.user_info_m:hover{
  box-shadow:0 5px 8px 4px rgb(6 16 26 / 12%);
}
.el-card__body {
    padding: 0px;
  }
</style>
