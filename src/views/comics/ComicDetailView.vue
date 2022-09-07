<script setup lang="ts">
import type { Comic } from '@/apis/marvel/types/comics'
import { useComicsStore } from '@/stores/comics'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const comicsStore = useComicsStore()
const comic = ref<Comic | null>(null)

const imageSrc = computed(() => {
  if (comic.value === null) return undefined

  const { thumbnail } = comic.value
  return thumbnail.path + '.' + thumbnail.extension
})

onMounted(async () => {
  const id = route.params.id as string

  comic.value = await comicsStore.get(+id)
})

function titleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <article>
    <img :src="imageSrc" />

    <div id="content">
      <section aria-label="Comic title">
        <h1>{{ comic?.title }}</h1>
      </section>

      <section id="creators" aria-label="Creators">
        <div v-for="({ role, name }, idx) of comic?.creators.items" :key="idx">
          <h3>{{ titleCase(role) }}</h3>

          <p>{{ name }}</p>
        </div>
      </section>

      <section aria-label="description">
        <p id="description">{{ comic?.description }}</p>
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss">
article {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;

  #content {
    h1 {
      margin-bottom: 2rem;
    }

    #creators {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    #description {
      margin-top: 4rem;
      font-size: 0.85em;
    }
  }
}

@media (max-width: 650px) {
  article {
    grid-template-columns: 1fr;

    img {
      max-width: 300px;
      justify-self: center;
    }
  }
}
</style>
