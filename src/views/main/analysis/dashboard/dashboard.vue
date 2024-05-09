<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <countCart v-bind="item" />
        </el-col>
      </template>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import countCart from './c-cpns/count-card/count-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'

const analysisStore = useAnalysisStore()

analysisStore.fetchAnalysisDataAction()

const { amountList } = storeToRefs(analysisStore)
</script>

<style lang="less" scoped>
// .dashboard {
//   color: red;
// }
</style>
