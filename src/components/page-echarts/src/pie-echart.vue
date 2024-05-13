<template>
  <div class="pie-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IPieEchartData } from '../types'

interface IProps {
  pieData: IPieEchartData[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    title: {
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        center: ['50%', '55%'],
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.pie-echart {
  color: red;
}
</style>
