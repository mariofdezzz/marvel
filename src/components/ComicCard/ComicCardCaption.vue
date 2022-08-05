<script setup lang="ts">
import type { Comic } from '@/apis/marvel/types/comics.js'
import { computed } from 'vue'

const props = defineProps<{
  comic: Comic
}>()

const title = computed(() => {
  return props.comic.title
})

const creators = computed(() => {
  const { creators } = props.comic

  return creators.items
    .map(({ name }) => name)
    .slice(0, 2)
    .join(', ')
})
</script>

<template>
  <figcaption>
    <h3>{{ title }}</h3>

    <p>{{ creators }}</p>
  </figcaption>
</template>

<style scoped lang="scss">
figcaption {
  width: 100%;

  h3 {
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 10px;
  }
}
</style>
