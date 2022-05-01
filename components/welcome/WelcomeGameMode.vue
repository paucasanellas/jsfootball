<template>
  <NuxtLink :to="gamemode.slug" class="WelcomeGameMode">
    <img :src="gamemode.img" alt="">
    <p>
      {{ gamemode.title }}
    </p>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  gamemode: {
    type: Object,
    required: true
  }
})
</script>

<style lang="postcss">
.WelcomeGameMode{
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: 900;
  transition: transform .5s;

  &:hover {
    transform: translateY(-.5rem);
    p {
      transform: scale(1.1);
    }
  }

  img {
    border: 1px solid var(--color-white);
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 1), 0 4px 6px -4px rgb(0 0 0 / 1);
    overflow: hidden;
    border-radius: .25rem;
  }

  p {
    margin-top: .25rem;
    font-size: var(--typo-lg);
    transition: transform .5s;
  }
}
</style>
