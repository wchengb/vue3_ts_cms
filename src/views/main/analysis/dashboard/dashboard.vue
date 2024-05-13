<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <countCart v-bind="item" />
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <chartCart header="分类商品数量(饼图)">
          <PieEchart :pie-data="showGoodsCategoryCount" />
        </chartCart>
      </el-col>
      <el-col :span="10">
        <chartCart header="不同城市商品销量">
          <MapEchart :map-data="showGoodsAddressSale" />
        </chartCart>
      </el-col>
      <el-col :span="7">
        <chartCart header="分类商品数量(玫瑰图)"
          ><RoseEchart :rose-data="showGoodsCategorySale"
        /></chartCart>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <chartCart header="分类商品销量">
          <BarEchart :bar-data="showGoodsCategorySale" />
        </chartCart>
      </el-col>
      <el-col :span="12">
        <chartCart header="分类商品收藏">
          <FoldEchart :fold-data="showGoodsFavorCount" />
        </chartCart>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import countCart from './c-cpns/count-card/count-card.vue'
import chartCart from './c-cpns/chart-card/chart-card.vue'
import useAnalysisStore from '@/store/main/analysis/analysis'

import {
  PieEchart,
  LineEchart,
  RoseEchart,
  BarEchart,
  FoldEchart,
  MapEchart
} from '@/components/page-echarts'
import { computed } from 'vue'

const analysisStore = useAnalysisStore()

analysisStore.fetchAnalysisDataAction()

const {
  amountList,
  goodsCategorySale,
  goodsCategoryCount,
  goodsTopSale,
  goodsFavorCount,
  goodsAddressSale
} = storeToRefs(analysisStore)

const showGoodsCategorySale = computed(() => {
  return goodsCategorySale.value.map(item => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsCategoryCount = computed(() => {
  return goodsCategoryCount.value.map(item => ({
    name: item.name,
    value: item.goodsCount
  }))
})
const showGoodsTopSale = computed(() => {
  return goodsTopSale.value.map(item => ({
    name: item.name,
    value: item.saleCount
  }))
})
const showGoodsFavorCount = computed(() => {
  return goodsFavorCount.value.map(item => ({
    name: item.name,
    value: item.goodsFavor
  }))
})
const showGoodsAddressSale = computed(() => {
  return goodsAddressSale.value.map(item => ({
    name: item.address,
    value: item.count
  }))
})
</script>

<style lang="less" scoped>
.dashboard {
  color: red;
}
.el-row {
  margin-bottom: 10px;
}
</style>
