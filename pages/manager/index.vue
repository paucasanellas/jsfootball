<template>
  <main class="PageManager">
    <ManagerIndexHeader />
    <ManagerIndexCountry />
    <ManagerIndexLeagues />
    <ManagerIndexTeam />
    <ManagerIndexTeams />
  </main>
</template>

<script lang="ts" setup>
import { useDatabaseStore } from '@/stores/database'
const { get } = useDatabaseStore()
const { load } = useMemory()
const database = get()
load(database)
</script>
