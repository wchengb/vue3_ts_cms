<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <mainMenu :is-fold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <mainHeader @fold-change="handleFolfChange" />
        </el-header>
        <el-main>
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'

// 处理main-header中折叠的变化
const isFold = ref(false)
function handleFolfChange(flag: boolean) {
  isFold.value = flag
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .main-content {
    height: 100%;
    .el-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: center;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
    .el-header {
      background-color: #fff;
    }
    .el-main {
      background-color: #f5f5f5;
    }
  }
}
</style>
