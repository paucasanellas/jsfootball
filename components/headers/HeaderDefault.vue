<template>
  <header class="HeaderDefault">
    <p class="HeaderDefault__gamemode">
      <slot name="gamemode" />
    </p>
    <h1 class="HeaderDefault__title">
      <slot name="title" />
    </h1>
    <div class="HeaderDefault__content">
      <slot />
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>
