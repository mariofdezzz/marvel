<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />

  <RouterView />

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
  grid-template: auto 1fr auto / 1fr min(100ch, calc(100% - 2rem)) 1fr;
  row-gap: 2rem;
  column-gap: 1rem;

  header {
    grid-column: 1/4;
  }

  main {
    grid-column: 2;
  }
}
</style>
