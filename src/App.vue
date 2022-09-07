<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />

  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition
        :enter-from-class="(route.meta.enterFromClass as string|undefined)"
        :enter-active-class="(route.meta.enterActiveClass as string|undefined)"
        :leave-to-class="(route.meta.leaveToClass as string|undefined)"
        :leave-active-class="(route.meta.leaveActiveClass as string|undefined)"
        mode="out-in"
      >
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>

  <Footer />
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

  header,
  footer {
    grid-column: 1/4;
  }

  main {
    grid-column: 2;
  }
}

.page {
  position: absolute;
}
$distance: 10px;
$duration: 0.3s;

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateX($distance);
}

.fade-leave-to {
  transform: translateX(-$distance);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity $duration ease-out, transform $duration ease-out;
}
</style>
