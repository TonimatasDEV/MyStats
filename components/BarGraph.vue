<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const chart = ref(null)
let instance = null

defineProps({
  api: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

onMounted(async () => {
  const response = await fetch("/api/" + __props.api)
  const data = await response.json()
  const names = data?.names || []
  const values = data?.values || []

  instance = echarts.init(chart.value, 'dark')

  const option = {
    backgroundColor: '#1d1d1d',
    title: {
      text: __props.title,
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: names,
      inverse: true,
    },
    series: [
      {
        realtimeSort: true,
        type: 'bar',
        data: values,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ]
  }

  instance.setOption(option)

  window.addEventListener('resize', () => {
    instance && instance.resize()
  })
})

onBeforeUnmount(() => {
  instance && instance.dispose()
  window.removeEventListener('resize', () => {
    instance && instance.resize()
  })
})
</script>
<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>
