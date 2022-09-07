<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from 'vue'
import type { SelectOption } from './Select'

const props = defineProps<{
  options: SelectOption[]
  selected?: string
}>()
const emit = defineEmits<{
  (e: 'change', value: string): void
}>()

function onSelect(event: string) {
  emit('change', event)
}

const selected = computed(() => {
  return props.selected &&
    props.options.map(({ key }) => key).includes(props.selected)
    ? props.selected
    : props.options[0].key
})
</script>

<template>
  <select @change="onSelect(($event.target as HTMLSelectElement).value)">
    <option
      v-for="({ key, label }, idx) of options"
      :key="idx"
      :value="key"
      :selected="selected === key"
    >
      {{ label }}
    </option>
  </select>
</template>

<style scoped lang="scss">
select {
  min-width: 16ch;
  height: 3.5ch;
  outline: 0;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    border-color: $primary;
  }
}
</style>
