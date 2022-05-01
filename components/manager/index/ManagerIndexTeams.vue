<template>
  <section class="ManagerIndexTeams">
    <p v-for="team in teams" :key="team.code">
      <img :src="team.logo" width="48">
    </p>
  </section>
</template>

<script lang="ts" setup>
import { useTeamsStore } from '@/stores/teams'
const { teams } = useTeamsStore()
</script>
