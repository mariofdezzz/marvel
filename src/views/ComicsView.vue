<script setup lang="ts">
import ComicCardSkeleton from '@/components/ComicCard/ComicCardSkeleton.vue'
import { useComicsStore } from '@/stores/comics/index.js'
import { useIntersectionObserver } from '@vueuse/core'
import { computed, ref } from 'vue'
import ComicCard from '../components/ComicCard/ComicCard.vue'
import ComicCardCaption from '../components/ComicCard/ComicCardCaption.vue'
import ComicCardThumbnail from '../components/ComicCard/ComicCardThumbnail.vue'

const comicsStore = useComicsStore()
const lastImage = ref(null)

const comics = computed(() => {
  return comicsStore.comics
})

useIntersectionObserver(
  lastImage,
  () => {
    comicsStore.fetchMore()
  },
  { rootMargin: '400px' }
)
</script>

<template>
  <div id="gallery">
    <ComicCard v-for="(comic, idx) of comics" :key="idx" :title="comic?.title">
      <ComicCardSkeleton v-if="comic === null" />

      <ComicCardThumbnail v-if="comic !== null" :comic="comic" />

      <ComicCardCaption v-if="comic !== null" :comic="comic" />
    </ComicCard>
  </div>
  <div ref="lastImage" id="gallery-end"></div>
</template>

<style scoped lang="scss">
#gallery {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>

<style lang="scss">
#app > #gallery-end {
  grid-column: 2;
}
</style>
