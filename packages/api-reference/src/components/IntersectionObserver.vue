<script setup lang="ts">
import { useIntersectionObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  id?: string
  is?: string
}>()

const emit = defineEmits<{
  (e: 'intersecting'): void
}>()

const intersectionObserverRef = ref<HTMLElement>()

const calculateRootMargin = (element: HTMLElement) => {
  // Trigger when element reaches top 1/3 of viewport
  return '-33% 0px -67% 0px'
}

const calculateThreshold = (element: HTMLElement) => {
  return 0
}

onMounted(() => {
  if (intersectionObserverRef.value) {
    const options = {
      rootMargin: calculateRootMargin(intersectionObserverRef.value),
      threshold: calculateThreshold(intersectionObserverRef.value),
    }

    useIntersectionObserver(
      intersectionObserverRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting && props.id) {
          emit('intersecting')
        }
      },
      options,
    )
  }
})
</script>
<template>
  <component
    :is="is ?? 'div'"
    :id="id"
    ref="intersectionObserverRef">
    <slot />
  </component>
</template>
