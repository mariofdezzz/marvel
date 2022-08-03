<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import NavbarLink from './NavbarLink.vue'
</script>

<template>
  <header>
    <nav>
      <NavbarLink href="/">👌🏼 Home</NavbarLink>
      <NavbarLink href="/comics">🎉 Comics</NavbarLink>
      <NavbarLink href="/contact">🥸 Contact</NavbarLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  // top: 1rem;
  // position: sticky;
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  background-color: var(--primary);
  border-radius: 10px;
  font-size: 18px;

  nav {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }
}
</style>
