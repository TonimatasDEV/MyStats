<script setup>
const projectsCurseForge = [
  {
    name: 'Packet Fixer',
    url: 'https://www.modpackindex.com/api/v1/mod/39585',
    extract: data => data?.value?.data?.download_count
  },
  {
    name: 'Mekanism Curios',
    url: 'https://www.modpackindex.com/api/v1/mod/77177',
    extract: data => data?.value?.data?.download_count
  },
  {
    name: 'Time Stacker',
    url: 'https://www.modpackindex.com/api/v1/mod/40663',
    extract: data => data?.value?.data?.download_count
  },
  {
    name: 'KrystalCraft',
    url: 'https://www.modpackindex.com/api/v1/mod/31992',
    extract: data => data?.value?.data?.download_count
  },
  {
    name: 'MythLib',
    url: 'https://www.modpackindex.com/api/v1/mod/31992',
    extract: data => data?.value?.data?.download_count
  },
  {
    name: 'ForgeFPS',
    url: 'https://www.modpackindex.com/api/v1/modpack/64705',
    extract: data => data?.value?.data?.download_count
  }
]

const projectsModrinth = [
  {
    name: 'Packet Fixer',
    url: 'https://api.modrinth.com/v2/project/packet-fixer',
    extract: data => data?.value?.downloads
  },
  {
    name: 'Mekanism Curios',
    url: 'https://api.modrinth.com/v2/project/mekanism-curios',
    extract: data => data?.value?.downloads
  },
  {
    name: 'Time Stacker',
    url: 'https://api.modrinth.com/v2/project/timestacker',
    extract: data => data?.value?.downloads
  },
  {
    name: 'PerWorldPlugins',
    url: 'https://api.modrinth.com/v2/project/perworldplugins',
    extract: data => data?.value?.downloads
  },
  {
    name: 'KrystalCraft',
    url: 'https://api.modrinth.com/v2/project/krystalcraft',
    extract: data => data?.value?.downloads
  },
  {
    name: 'MythLib',
    url: 'https://api.modrinth.com/v2/project/mythlib',
    extract: data => data?.value?.downloads
  },
  {
    name: 'PerWorldCommands',
    url: 'https://api.modrinth.com/v2/project/perworldcommands',
    extract: data => data?.value?.downloads
  },
  {
    name: 'InstaKillMobs',
    url: 'https://api.modrinth.com/v2/project/instakillmobs',
    extract: data => data?.value?.downloads
  }
]

const projectsSpigot = [
  {
    name: 'PerWorldPlugins',
    url: 'https://api.spiget.org/v2/resources/96161',
    extract: data => data?.value?.downloads
  },
  {
    name: 'PerWorldCommands',
    url: 'https://api.spiget.org/v2/resources/97003',
    extract: data => data?.value?.downloads
  },
  {
    name: 'InstaKillMobs',
    url: 'https://api.spiget.org/v2/resources/96185',
    extract: data => data?.value?.downloads
  }
]

const projectsHangar = [
  {
    name: 'PerWorldPlugins',
    url: 'https://hangar.papermc.io/api/v1/projects/PerWorldPlugins',
    extract: data => data?.value?.stats?.downloads
  }
]
</script>
<template>
  <BarGraph title="CurseForge downloads" :projects="projectsCurseForge"/>
  <BarGraph title="Modrinth downloads" :projects="projectsModrinth"/>
  <BarGraph title="SpigotMC downloads" :projects="projectsSpigot"/>
  <BarGraph title="Hangar downloads" :projects="projectsHangar"/>
</template>