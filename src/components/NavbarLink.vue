<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href">
    <slot></slot>
  </a>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

a {
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  border: 2px solid transparent;
  color: $on-bg-primary;
  text-decoration: none;

  &:hover {
    color: $primary;
  }
}
</style>
