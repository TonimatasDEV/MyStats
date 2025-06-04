<template>
  <nav class="">
    <div class="bg-black max-w-7xl mx-auto max-h-fit px-10 py-4 flex items-center justify-between rounded-b-2xl">
      <div class="text-xl font-bold">
        <NuxtLink to="/">My project stats</NuxtLink>
      </div>
      <ul class="flex space-x-8">
        <li><NuxtLink to="/" class="hover:text-gray-400">Inicio</NuxtLink></li>
        <li>
          <NuxtLink to="https://github.com/TonimatasDEV/MyStats" target="_blank" external class="hover:text-gray-400">
            <Icon name="uil:github" style="color: white" size="25px"/>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
