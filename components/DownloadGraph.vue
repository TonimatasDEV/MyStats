<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const chart = ref(null)
let instance = null

const { data: packetFixerData } = await useFetch('https://www.modpackindex.com/api/v1/mod/39585')
const packetFixerDownloads = packetFixerData.value?.data?.download_count || 0
const { data: mekanismCuriosData } = await useFetch('https://www.modpackindex.com/api/v1/mod/77177')
const mekanismCuriosDownloads = mekanismCuriosData.value?.data?.download_count || 0
const { data: timeStackerData } = await useFetch('https://www.modpackindex.com/api/v1/mod/40663')
const timeStackerDownloads = timeStackerData.value?.data?.download_count || 0

onMounted(() => {
  instance = echarts.init(chart.value, 'dark')

  const option = {
    backgroundColor: '#1d1d1d',
    title: {
      text: 'Downloads',
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['Packet Fixer', 'Mekanism Curios', 'Time Stacker'],
      inverse: true,
    },
    series: [
      {
        realtimeSort: true,
        type: 'bar',
        data: [packetFixerDownloads, mekanismCuriosDownloads, timeStackerDownloads],
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ]
  }

  instance.setOption(option)

  // Para que el gráfico se adapte al tamaño
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
