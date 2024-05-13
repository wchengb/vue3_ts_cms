<template>
  <div class="fold-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import baseEchart from './base-echart.vue'

interface IProps {
  foldData: {
    name: string
    value: number
  }[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.foldData.map(item => item.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.foldData.map(item => item.value),
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.fold-echart {
  color: red;
}
</style>
