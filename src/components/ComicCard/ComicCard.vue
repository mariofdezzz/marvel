<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <figure :title="title">
    <slot></slot>
  </figure>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

figure {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  // width: 100%;
  // height: 100%;
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
