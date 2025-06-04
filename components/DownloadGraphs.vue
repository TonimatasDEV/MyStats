<script setup>
const projectsHangar = [
  {
    name: 'PerWorldPlugins',
    url: 'https://hangar.papermc.io/api/v1/projects/PerWorldPlugins',
    extract: data => data?.value?.stats?.downloads
  }
]
</script>
<template>
  <BarGraph title="CurseForge downloads" api="curseforge"/>
  <BarGraph title="Modrinth downloads" api="modrinth"/>
  <BarGraph title="SpigotMC downloads" api="spiget"/>
  <BarGraph title="Hangar downloads" api="hangar"/>
</template>