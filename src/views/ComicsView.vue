<script setup lang="ts">
import ComicCard from '@/components/ComicCard/ComicCard.vue'
import ComicCardCaption from '@/components/ComicCard/ComicCardCaption.vue'
import ComicCardSkeleton from '@/components/ComicCard/ComicCardSkeleton.vue'
import ComicCardThumbnail from '@/components/ComicCard/ComicCardThumbnail.vue'
import Select from '@/components/common/Select.vue'
import { useComicsStore } from '@/stores/comics/index.js'
import type { ComicState } from '@/stores/comics/types'
import { useIntersectionObserver } from '@vueuse/core'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { orderByOptions, type UseIntersectionObserver } from './ComicsView'

const comicsStore = useComicsStore()
const lastImage = ref(null)
let intersectionObserver: UseIntersectionObserver | null = null

const comics = computed(() => {
  return comicsStore.comics
})

function sortComicsBy(orderBy: string) {
  comicsStore.orderBy = orderBy as ComicState['orderBy']
  comicsStore.refresh()
}

onMounted(() => {
  intersectionObserver = useIntersectionObserver(
    lastImage,
    (entry) => {
      if (!entry[0].isIntersecting) return

      comicsStore.fetchMore()
    },
    { rootMargin: '400px' }
  )
})

onUnmounted(() => {
  intersectionObserver?.stop()
})
</script>

<template>
  <div>
    <div id="filters">
      <Select
        :options="orderByOptions"
        :selected="comicsStore.orderBy"
        @change="sortComicsBy"
      />
    </div>

    <div id="gallery">
      <ComicCard
        v-for="(comic, idx) of comics"
        :key="idx"
        :title="comic?.title"
        :id="comic?.id"
      >
        <ComicCardSkeleton v-if="comic === null" />

        <ComicCardThumbnail v-if="comic !== null" :comic="comic" />

        <ComicCardCaption v-if="comic !== null" :comic="comic" />
      </ComicCard>
    </div>

    <div ref="lastImage" id="gallery-end"></div>
  </div>
</template>

<style scoped lang="scss">
#filters {
  padding-bottom: 1.5rem;
}

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
