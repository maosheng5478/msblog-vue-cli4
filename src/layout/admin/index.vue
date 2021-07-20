<template>
  <el-container>
    <el-header class="admin_header">
      Header
    </el-header>
    <el-container>
      <el-aside class="admin_aside">
        Aside
      </el-aside>
      <el-container>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'index'
});
</script>

<style scoped lang="scss">
.admin_header{
  background-color: chocolate;
}
.admin_aside{
  width: 200px;
  background-color: #42b983;
}
</style>
