<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, onBeforeUnmount } from 'vue'

const chart = ref(null)
let instance = null

defineProps({
  projects: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
})

const projects = toRaw(__props.projects)

const names = []
const values = []

for (let i = 0; i < projects.length; i++) {
  names.push(projects[i].name)
  const { data: projectData } = await useFetch(projects[i].url)
  values.push(projects[i].extract(projectData) || 0)
}

onMounted(() => {
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
<template>
  <div ref="chart" style="width: 100%; height: 400px;"></div>
</template>
