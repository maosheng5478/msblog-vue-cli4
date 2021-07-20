<template>
  <div class="top">
    <div class="center_container">
      <div class="right_title">
        <router-link
          to="/"
          class="text"
          :style="data.style"
          tag="span">
          {{ $t(`message.title`) }}
        </router-link>
      </div>
      <div class="menu-title">
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <UisHouseUser size="18px"  />
            {{ $t('message.homepage') }}
          </router-link>
        </div>
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <uis-apps size="18px" />
            {{ $t('message.categories') }}
          </router-link>
        </div>
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <UisBookmark size="18px" />
            {{ $t('message.tags') }}
          </router-link>
        </div>
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <PushpinFilled />
            {{ $t('message.links') }}
          </router-link>
        </div>
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <i class="el-icon-s-promotion" />
            {{ $t('message.about') }}
          </router-link>
        </div>
        <div>
          <router-link
            to=""
            class="text"
            :style="data.style">
            <i class="el-icon-user-solid" />
            {{ $t('message.login') }}
          </router-link>
        </div>
        <language class="change_text" :style="data.style" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted } from 'vue';
import { UisApps, UisHouseUser, UisBookmark } from '@iconscout/vue-unicons-solid';
import { PushpinFilled } from '@ant-design/icons-vue';
import Language from '../public/Language';

export default defineComponent({
  name: 'TopBar',
  components: { Language, UisApps, UisHouseUser, UisBookmark, PushpinFilled },
  setup() {
    const data = reactive({
      style: {},
      opacity: 0,
      iconColor: 'rgba(255, 255, 255,0.9)',
    });
    const handleWindowScroll = function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      data.opacity = Math.abs(Math.round(scrollTop)) / 250;
      if (data.opacity > 0.85) {
        data.opacity = 0.85;
      }
      if (data.opacity === 0) {
        data.opacity = 0.9;
        data.style = { color: `rgba(255, 255, 255,${data.opacity})` };
        data.iconColor = `rgba(255, 255, 255,${data.opacity})`;
        return;
      }
      data.iconColor = `rgba(50, 50, 50,${data.opacity})`;
      data.style = { color: `rgba(50, 50, 50,${data.opacity})` };
    };
    window.addEventListener('scroll', handleWindowScroll);
    onMounted({
    });
    return {
      handleWindowScroll,
      data
    };
  },
});
</script>

<style lang="scss" scoped>
.top{
  .center_container{
    width: 100%;
    height: 30px;
    margin: auto;
    text-align: center;
    .menu-title{
      display: flex;
      align-items: center;
      float: right;
      margin-right: 30px;
      text-align: center;
      .icon_h:hover{
        color: #49b1f5;
      }
    }
    .text{
      text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
      color: rgba(255,255,255,0.9);
      margin-top: 7px;
      margin-left: 20px;
    }
    .text>a{
      text-decoraction: none;
    }
    .text:hover{
      color: #49b1f5 !important;
    }
    .router-link-active {
      text-decoration: none;
    }
    .right_title{
      float: left;
      font-size: 18px;
      font-weight: bold;
    }
    .change_text{
      margin-left: 20px;
      color: rgba(255,255,255,0.9) ;
    }
  }
}
</style>
