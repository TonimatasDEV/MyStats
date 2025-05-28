<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const { data } = await useFetch('https://www.modpackindex.com/api/v1/modpacks?limit=1&page=1')
const total = data.value?.meta?.total || 0
const { data: dataPacketFixer } = await useFetch('https://www.modpackindex.com/api/v1/mod/39585/modpacks?limit=3&page=1')
const packetFixer = dataPacketFixer.value?.meta?.total || 0

const chart = ref(null)
let instance = null

onMounted(() => {
  instance = echarts.init(chart.value, 'dark')

  const option = {
    backgroundColor: '#1d1d1d',
    title: {
      text: 'Modpack with Packet Fixer',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Data',
        type: 'pie',
        radius: '50%',
        data: [
          { value: total - packetFixer, name: 'Other' },
          { value: packetFixer, name: 'Packet Fixer' }
        ],
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
