<template>
  <div class="base-echart">
    <div class="echart" ref="echartRef"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import ChinaJSON from './echarts/data/china.json'

echarts.registerMap('china', ChinaJSON as any)

interface IProps {
  option: EChartsOption
}

const props = defineProps<IProps>()

const echartRef = ref<HTMLElement>()
let echartInstance: echarts.ECharts
onMounted(() => {
  echartInstance = echarts.init(echartRef.value!, 'light', { renderer: 'canvas' })
  echartInstance.setOption(props.option)
})
watch(
  () => props.option,
  newVal => {
    echartInstance.setOption(newVal)
  }
)
</script>

<style lang="less" scoped>
.base-echart {
  color: red;
}
.echart {
  height: 300px;
}
</style>
