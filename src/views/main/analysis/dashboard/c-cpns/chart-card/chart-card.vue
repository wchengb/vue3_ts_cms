<template>
  <div class="chart-card">
    <el-card :header="header">
      <slot> 卡片默认内容 </slot>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="chart-card">
interface IProps {
  header?: string
}

withDefaults(defineProps<IProps>(), {
  header: '图形标题文本'
})
</script>

<style lang="less" scoped></style>
