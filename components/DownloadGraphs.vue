<script setup>
const projectsCurseForge = [
  {
    name: 'Packet Fixer',
    url: 'https://api.cfwidget.com/689467',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'Mekanism Curios',
    url: 'https://api.cfwidget.com/1251061',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'Time Stacker',
    url: 'https://api.cfwidget.com/721265',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'KrystalCraft',
    url: 'https://api.cfwidget.com/560953',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'MythLib',
    url: 'https://api.cfwidget.com/925896',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'ForgeFPS',
    url: 'https://api.cfwidget.com/882710',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'PerWorldPlugins',
    url: 'https://api.cfwidget.com/526546',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'InstaKillMobs',
    url: 'https://api.cfwidget.com/526948',
    extract: data => data?.value?.downloads?.total
  },
  {
    name: 'PerWorldCommands',
    url: 'https://api.cfwidget.com/539286',
    extract: data => data?.value?.downloads?.total
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