<template>
  <section class="WelcomeGameModes">
    <NuxtLink v-for="gamemode in gamemodes" :key="gamemode.slug" :to="gamemode.slug">
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

<style lang="postcss">
  .WelcomeGameModes {
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    gap: 2rem 1rem;
    justify-content: center;
    text-align: center;

    a {
      transition: transform .5s;

      &:hover {
        transform: scale(1.1);

        p {
          transform: translateY(-15px);
        }
      }
    }

    img {
      box-shadow: var(--shadow-xl);
      border-radius: var(--radius-xs);
    }

    p {
      color: var(--color-white);
      font-size: var(--text-xl);
      font-weight: 900;
      transition: transform .5s;
    }
  }
</style>
