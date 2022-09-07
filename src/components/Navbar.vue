<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import NavbarLink from './Navbar/NavbarLink.vue'
import NavbarLogo from './Navbar/NavbarLogo.vue'
</script>

<template>
  <header>
    <div id="navbar">
      <nav>
        <NavbarLink href="/">
          <NavbarLogo />
        </NavbarLink>

        <NavbarLink href="/comics">Comics</NavbarLink>

        <NavbarLink href="/characters">Characters</NavbarLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  top: 0;
  position: sticky;
  z-index: 1;
}

#navbar {
  width: 100%;
  padding: 1rem;
  background-color: $bg-primary;
  border-bottom: 1px solid $on-bg-primary;
  display: grid;
  grid-template: auto 1fr auto / 1fr min(100ch, calc(100% - 2rem)) 1fr;

  nav {
    display: flex;
    gap: 1.5rem;
    grid-column: 2;
    font-size: 18px;
    align-items: center;
  }
}
</style>
