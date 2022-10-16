<template>
  <div ref="container" class="canvas-wrap" />
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {render} from '~/render/render'

const container = ref<HTMLDivElement | null>(null)

const init = () =>
{
  const c = container.value
  if (!c || !(c instanceof HTMLDivElement))
  {
    throw Error('No container')
  }

  render(c)
}

onMounted(init)
</script>

<style>
.canvas-wrap {
  width: 100%;
  height: 100%;
}
.canvas-wrap canvas{
  image-rendering: pixelated;
  transform: scale(4);
  top: calc(75% * 0.5);
  left: calc(75% * 0.5);
  position: relative;
}
</style>