<template>
  <div style="overflow: hidden">
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
          <el-row justify="space-around">
            <el-col :span="14">
              <el-input
                v-model="data.form.code"
                autocomplete="off"
                :placeholder="$t('message.verificationCode')" />
            </el-col>
            <el-col :span="10">
              <img
                :src="data.imgSrc"
                alt=""
                @click="handleArithmetic"
                v-if="!data.imgLoad">
              <div v-else>
                <img
                  src="../../../assets/imgEmpty.png"
                  alt=""
                  ref="img"
                  style="height: 40px">
              </div>
            </el-col>
          </el-row>
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
          <router-link to="/home">
            <el-button icon="el-icon-back" type="text">{{ $t("message.back") }}</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
import { loginByPwd } from '../../../api/login';
import { getArithmetic } from '../../../api/code';
import { ElMessage } from 'element-plus';
import { commonUse } from '../../../utils/use';

export default defineComponent({
  name: 'Login',
  setup() {
    const use = commonUse();
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
        code: '',
        key: '',
      },
      loading: false,
      imgLoad: true,
      imgSrc: '',
      imgEmpty: require('../../../assets/empty_img.png'),
    });
    const handleLogin = function () {
      data.form.key = use.store.getters.getCodeKey;
      loginByPwd(data.form).then((res) => {
        use.store.commit('setUserPhone', res.phone);
        use.store.commit('setUsername', res.username);
        use.store.commit('setUserEmail', res.email);
        use.store.commit('setUserToken', res.token);
        ElMessage.success({
          message: use.i18n.t('message.login_success'),
          type: 'success',
          duration: 2 * 1000,
        });
        use.router.push('/userInfo');
      });
    };
    const handleArithmetic = function() {
      getArithmetic().then((res) => {
        data.imgSrc = res.img;
        data.imgLoad = false;
        use.store.commit('setCodeKey', res.key);
        return false;
      }).catch((err) => {
        data.imgLoad = true;
        console.error(err);
        return true;
      });
    };
    onMounted(() => {
      handleArithmetic();
    });
    return {
      data,
      handleLogin,
      handleArithmetic,
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
  overflow: hidden;
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
