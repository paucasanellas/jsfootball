<template>
  <main class="PageWelcome">
    <Container>
      <WelcomeTitle />
      <WelcomeGameModes />
      <WelcomeOptions />
    </Container>
  </main>
</template>

<script lang="ts" setup>

</script>

<style lang="postcss">
.PageWelcome{
  background-size: cover;
  background-image: linear-gradient(to right,rgb(0 37 84 / 99%), rgb(0 57 122/ 90%)), url('/images/welcome.jpg');

  .container {
    min-height: 100vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 1.5rem;
  }

}

.WelcomeTitle {
  grid-area: 1 / 1 / 10 / 4;
}

.WelcomeGameModes {
  grid-area: 1 / 4 / 8 / 10;
}

.WelcomeOptions {
  grid-area: 8 / 4 / 10 / 10;
}
</style>
