<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'LayoutContainer'
}
</script>

<style lang="postcss">
.container {
  margin: 0 auto;
  width: 100%;

  @media (min-width: $media-xs) {
    max-width: var(--media-xs)
  }
  @media (min-width: $media-sm) {
    max-width: var(--media-sm)
  }
  @media (min-width: $media-md) {
    max-width: var(--media-md)
  }
  @media (min-width: $media-lg) {
    max-width: var(--media-lg)
  }
  @media (min-width: $media-xl) {
    max-width: var(--media-xl)
  }
}
</style>
