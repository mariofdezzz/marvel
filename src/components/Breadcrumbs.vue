<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const breadcrumbs = computed(() => {
  const route = useRoute().fullPath.split('/').slice(1)

  return route.map((routePart, index) => ({
    name: routePart.charAt(0).toUpperCase() + routePart.slice(1),
    href: '/' + route.slice(0, index + 1).join('/'),
  }))
})
</script>
<template>
  <div id="breadcrumbs">
    <template v-for="({ name, href }, idx) of breadcrumbs" :key="idx">
      <router-link v-if="idx < breadcrumbs.length - 1" :to="href">
        {{ name }}
      </router-link>
      <span v-else>
        {{ name }}
      </span>

      <span v-if="idx < breadcrumbs.length - 1">/</span>
    </template>
  </div>
</template>

<style scoped lang="scss">
#breadcrumbs {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-weight: 500;

  span {
    font-weight: bold;
  }

  a {
    color: $primary;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
