<script setup lang="ts">
import IconExternalLink from '../icons/IconExternalLink.vue'
defineProps<{
  href: string
}>()
</script>

<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">
    <span> Read more </span>

    <IconExternalLink />
  </a>
</template>

<style scoped lang="scss">
a {
  color: $on-bg-primary-disabled;
  font-weight: bold;
  font-size: 0.9em;
  display: flex;
  gap: 0.25rem;
  align-items: center;

  > svg {
    fill: $on-bg-primary-disabled;
  }

  &:hover > * {
    color: inherit;
    fill: inherit;
  }
}
</style>
