<script setup lang="ts">
defineProps<{
  title?: string
  id?: number
}>()
</script>

<template>
  <router-link :to="`/comics/${id ?? ''}`">
    <figure :title="title">
      <slot></slot>
    </figure>
  </router-link>
</template>

<style scoped lang="scss">
figure {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  width: 100%; // Makes skeleton as wide as possible always
  max-width: 300px;
  height: fit-content;
  justify-self: center;
  background-color: $bg-primary;
  border: 1px solid $on-bg;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.5s;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $on-bg;
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
