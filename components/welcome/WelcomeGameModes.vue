<template>
  <section class="WelcomeGameModes">
    <NuxtLink v-for="gamemode in gamemodes" :key="gamemode.slug" :to="gamemode.slug" class="WelcomeGameMode">
      <img :src="gamemode.img" alt="" width="120">
      <p>
        {{ gamemode.title }}
      </p>
    </NuxtLink>
  </section>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
const { gamemodes } = useConfigStore()
</script>
