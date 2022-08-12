<script setup lang="ts">
import type { Comic } from '@/apis/marvel/types/comics.js'
import { computed } from 'vue'

const props = defineProps<{
  comic: Comic
}>()

const imageSrc = computed(() => {
  const { thumbnail } = props.comic
  return thumbnail.path + '.' + thumbnail.extension
})
</script>

<template>
  <img :src="imageSrc" :alt="comic.title" />
</template>

<style scoped lang="scss">
img {
  aspect-ratio: 2/3;
}
</style>
