<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />

  <main>
    <RouterView />
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

  header,
  main {
    grid-column: 2;
  }
}
</style>
