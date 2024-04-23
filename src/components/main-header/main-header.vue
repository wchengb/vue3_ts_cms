<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick()">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
        <!-- <template v-if="isFold == false">
          <Fold />
        </template>
        <template v-if="isFold == true">
          <Expand />
        </template> -->
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <headerCrumb />
      </div>
      <div class="info">
        <headerInfo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headerInfo from './c-cpns/header-info.vue'
import headerCrumb from './c-cpns/header-crumb.vue'

// 0. 自定义事件
const emit = defineEmits(['foldChange'])

const isFold = ref(false)
function handleMenuIconClick() {
  // 1. 内部改变状态
  isFold.value = !isFold.value
  // 2 将时间和状态传递给父组件
  emit('foldChange', isFold.value)
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
