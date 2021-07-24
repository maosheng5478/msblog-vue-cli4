<template>
  <div>
    <div id="paper">
      <el-form
        class="login-container"
        label-position="left"
        label-width="0px"
        :rules="data.rules"
        v-loading="data.loading">
        <div style="width: 100%">
          <h3 class="login_title">{{ $t('message.title') }}</h3>
        </div>
        <el-form-item>
          <el-input
            type="text"
            v-model="data.form.username"
            autocomplete="off"
            :placeholder="$t('message.account')"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            type="password"
            v-model="data.form.password"
            autocomplete="off"
            :placeholder="$t('message.password')"
          />
        </el-form-item>
        <el-form-item>
          <el-row :gutter="24" justify="space-around">
            <el-col :span="11">
              <el-button type="primary" class="btn_bg" @click="handleLogin">
                {{ $t("message.login") }}
              </el-button>
            </el-col>
            <el-col :span="11">
              <router-link to="register">
                <el-button type="primary" class="btn_bg">
                  {{ $t('message.register') }}
                </el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-back" type="text">{{ $t("message.back") }}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { loginByPwd } from '../../../api/login';

export default defineComponent({
  name: 'Login',
  setup() {
    const data = reactive({
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
        ],
      },
      form: {
        username: '',
        password: '',
      },
      loading: false,
    });
    const handleLogin = function () {
      loginByPwd(data.form).then((res) => {
        sessionStorage.setItem('username', res.username);
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('email', res.email);
        console.log(res);
      });
    };
    return {
      data,
      handleLogin,
    };
  },
});
</script>

<style lang="scss" scoped>
#paper {
  left: 0;
  right: 0;
  height: 100vh;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;
  margin: -5px 0;
  .btn_bg{
    width: 100%;
    background: #505458;
    border: none;
  }
}
.login-container {
  border-radius: 10px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px #eaeaeab6;
  box-shadow: 0 0 25px #a8a6a69f;
}
.login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
</style>
