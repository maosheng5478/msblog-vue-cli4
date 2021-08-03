<template>
  <div>
    <div class="left_logo">
      <img src="../../assets/icon2.png" class="icon_logo">
      <div class="logo_text">{{ $t('message.title') }}</div>
    </div>
    <div class="user_img">
      <el-dropdown style="" @command="handleCommand">
        <el-avatar icon="el-icon-user-solid" size="small" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>{{ $t('message.change_password') }}</el-dropdown-item>
            <el-dropdown-item command="logout">{{ $t('message.logout') }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { commonUse } from '../../utils/use';
import { openFullScreen } from '../loading';
import { logout } from '../../api/login';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'AdminHeader',
  setup() {
    const use = commonUse();
    const data = reactive({});
    const handleCommand = function (command) {
      if (command === 'logout') {
        logout().then(() => {
          ElMessage.success({
            message: use.t('message.successful_logout'),
            type: 'success',
            duration: 2 * 1000,
          });
        }).catch((err) => {
          console.error(err);
        });
        openFullScreen(use.getI18nItem('being_exited'), goHome);
      }
    };
    const goHome = () => {
      use.routerGo('/home');
      use.clearLoginInfo();
    };
    return {
      data,
      use,
      handleCommand,
    };
  },
});
</script>

<style lang="scss" scoped>
@import 'src/style/constant.scss';
.user_img{
  line-height: #{$admin_header_height};
  display: block;
  float: right;
  align-items: center;
  top: 10px;
}
.left_logo{
  float: left;
  text-align: center;
  line-height: #{$admin_header_height};
  position: absolute;
  .icon_logo{
    width: 45px;
    float: left;
    margin-top: 5px;
    margin-left: 10px;
    /*line-height: $admin_header_height;*/
  }
  .logo_text{
    position:absolute;
    font-weight: bold;
    font-size: 18px;
    width: 245px;
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    color: rgba(0,0,0,0.9);
  }
}
.text{
  font-weight: bold;
  font-size: 18px;
  width: 245px;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
  text-align: center;
  margin-top: auto;
  /* line-height:  $admin_header_height; */
}
.user_img{
  line-height: #{$admin_header_height};
  text-align: center;
  position: absolute;
  right: 30px;
}

</style>
