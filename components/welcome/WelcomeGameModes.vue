<template>
  <section class="WelcomeGameModes">
    <WelcomeGameMode v-for="gamemode in gamemodes" :key="gamemode.slug" :gamemode="gamemode" />
  </section>
</template>

<script lang="ts" setup>
const gamemodes = ref([
  { title: 'Amistoso', slug: 'friendly', img: '/images/welcome-friendly.jpg' },
  { title: 'Liga Manager', slug: 'game', img: '/images/welcome-game.jpg' },
  { title: 'Desafios', slug: 'challenges', img: '/images/welcome-challenge.jpg' },
  { title: 'Comunidad', slug: 'community', img: '/images/welcome-game.jpg' },
  { title: 'Base de datos', slug: 'database', img: '/images/welcome-game.jpg' },
  { title: 'Plantillas', slug: 'squads', img: '/images/welcome-game.jpg' },
  { title: 'Github', slug: 'github', img: '/images/welcome-github.jpg' }
])
</script>

<style lang="postcss">
.WelcomeGameModes{
  padding: 2rem 1rem;
  display: grid;
  align-items: center;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
