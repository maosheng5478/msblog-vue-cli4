<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button @click="test">sads</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';
import { testErr } from '@/api/test/request_test';
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  },
  setup() {
    return {
      test() {
        testErr().then();
      }
    };
  },
});
</script>
