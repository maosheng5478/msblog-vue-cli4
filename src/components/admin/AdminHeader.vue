<template>
  <div>
    <div class="left_logo">
      <img src="../../assets/icon2.png" class="icon_logo">
      <div class="logo_text">{{ $t('message.title') }}</div>
    </div>
    <div class="ah_right">
      <el-row
        :gutter="10"
        justify="space-around"
        align="middle">
        <el-col :span="5">
          <el-tooltip effect="dark" :content="$t('message.blog_home')" placement="bottom-start">
            <div @click="backHome">
              <platform style="width: 1.3em; height: 1.3em; margin-right: 5px" />
            </div>
          </el-tooltip>
        </el-col>
        <el-col :span="12">
          <language class="change" />
        </el-col>
        <el-col :span="7">
          <div>
            <el-dropdown style="" @command="handleCommand">
              <el-avatar icon="el-icon-user-solid" size="small" />
              <template #dropdown>
                <el-dropdown-menu>
                  <!-- <el-dropdown-item command="home">{{ $t('message.blog_home') }}</el-dropdown-item> -->
                  <el-dropdown-item>{{ $t('message.change_password') }}</el-dropdown-item>
                  <el-dropdown-item command="logout">{{ $t('message.logout') }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { commonUse } from '../../utils/use';
import { openFullScreen } from '../loading';
import { logout } from '../../api/login';
import { ElMessage } from 'element-plus';
import { Platform } from '@element-plus/icons';

export default defineComponent({
  name: 'AdminHeader',
  components: { Platform },
  setup() {
    const use = commonUse();
    const data = reactive({});
    const handleCommand = function (command) {
      switch (command) {
        case 'logout':
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
          break;
        // case 'home':
        //   use.routerGo('/home');
        //   break;
        default:
          break;
      }
    };
    const backHome = () => {
      use.routerGo('/home');
    };
    const goHome = () => {
      backHome();
      use.clearLoginInfo();
    };
    return {
      data,
      use,
      handleCommand,
      backHome,
    };
  },
});
</script>

<style lang="scss">
@import 'src/style/constant.scss';
.el-row{
    display:flex;
    flex-wrap: wrap;
    height: #{$admin_header_height};
}

.ah_right{
  text-align: center;
  display: block;
  float: right;
  margin-right: 15px;
  .change{
    color: #000 !important;
    margin: 0 !important;
  }
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
  // font-weight: bold;
  // font-size: 18px;
  width: 245px;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
</style>
