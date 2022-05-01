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
const db = useDatabase()
const memory = useMemory()
const database = db.get()
memory.load(database)
</script>
