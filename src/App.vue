<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header></header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<style lang="scss">
$bg: var(--bg);

body {
  background-color: $bg;
}

#app {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template: auto 1fr auto / 1fr min(100ch, 100%) 1fr;
}
</style>
