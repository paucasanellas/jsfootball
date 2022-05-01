<template>
  <div class="LayoutDefault">
    <slot />
  </div>
</template>

<style lang="postcss">
.LayoutDefault {
  main {
    background-size: cover;
    background-image: linear-gradient(to right,rgb(0 37 84 / 99%), rgb(0 57 122/ 90%)), url('/images/welcome.jpg');
    min-height: 100vh;
  }
}
</style>
