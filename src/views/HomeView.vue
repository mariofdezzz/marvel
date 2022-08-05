<script setup lang="ts">
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
    console.log('🎉')
    comicsStore.fetchMore()
  },
  { rootMargin: '-300px 0px 0px 0px' } // FIX: Not working?
)
</script>

<template>
  <main>
    <ComicCard v-for="(comic, idx) of comics" :key="idx" :title="comic.title">
      <ComicCardThumbnail :comic="comic" />

      <ComicCardCaption :comic="comic" />
    </ComicCard>

    <div ref="lastImage"></div>
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}
</style>
