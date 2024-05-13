<template>
  <div class="rose-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import baseEchart from './base-echart.vue'
import type { EChartsOption } from 'echarts'
import type { IEchartValueType } from '../types'

interface IProps {
  roseData: IEchartValueType[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    legend: {
      top: 'bottom'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [20, 100],
        center: ['49%', '40%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.rose-echart {
  color: red;
}
</style>
