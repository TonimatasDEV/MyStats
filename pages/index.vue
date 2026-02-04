<template>
  <title>TonimatasDEV Project Stats</title>

  <div class="mt-8">
    <div class="flex flex-row">
      <ModpacksWithGraph name="Packet Fixer" id="39585"/>
      <ModpacksWithGraph name="Mekanism Curios" id="77177"/>
    </div>

    <BarGraph title="CurseForge downloads" api="curseforge"/>
    <BarGraph title="Modrinth downloads" api="modrinth"/>
    <BarGraph title="SpigotMC downloads" api="spiget"/>
    <BarGraph title="Hangar downloads" api="hangar"/>
  </div>
</template>
<script setup lang="ts">
</script>