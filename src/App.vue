<template>
  <div class="app">
    <el-config-provider :locale="zhCn">
      <RouterView></RouterView>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
</script>

<style scoped>
.app {
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}
</style>
