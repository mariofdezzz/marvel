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
const creators = computed(() => {
  const { creators } = props.comic
  return creators.items
    .map(({ name }) => name)
    .slice(0, 2)
    .join(', ')
})
</script>

<template>
  <div id="comic-card" :title="comic.title">
    <img :src="imageSrc" :alt="comic.title" />

    <div id="info">
      <p id="title">
        {{ comic.title }}
      </p>
      <p id="creators">{{ creators }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
#comic-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid var(--on-bg);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s;

  //TODO: semantic html
  #info {
    width: 100%;
  }

  p#title {
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  p#creators {
    font-size: 10px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    transform: translateZ(-1px);
    transition: transform 0.5s;
  }

  $distance: 5px;
  &:hover {
    transform: translate($distance, -$distance);

    &::before {
      transform: translate3d(-$distance * 2, $distance * 2, -1px);
    }
  }
}
</style>
