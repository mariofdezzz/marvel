<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <router-link :to="href">
    <slot></slot>
  </router-link>
</template>
