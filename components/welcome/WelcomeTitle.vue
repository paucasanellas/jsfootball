<template>
  <section class="WelcomeTitle">
    <header>
      <h1>{{ app.name }} <small>{{ app.version }}</small></h1>
    </header>
  </section>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/config'
const { app } = useConfigStore()
</script>

<style lang="postcss">
.WelcomeTitle {
  text-align: center;
  padding: 1rem;

  h1 {
    font-size: var(--text-4xl);
    color: var(--color-white);
    font-weight: 900;

    small {
      font-size: var(--text-xl);
    }
  }
}
</style>
