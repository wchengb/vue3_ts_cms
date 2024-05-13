<template>
  <div class="bar-echart">
    <baseEchart :option="option" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { EChartsOption } from 'echarts'
import baseEchart from './base-echart.vue'

interface IProps {
  barData: {
    name: string
    value: number
  }[]
}

const props = defineProps<IProps>()

const option = computed<EChartsOption>(() => {
  return {
    xAxis: {
      type: 'category',
      data: props.barData.map(item => item.name)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.barData.map(item => item.value),
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  }
})
</script>

<style lang="less" scoped>
.bar-echart {
  color: red;
}
</style>
