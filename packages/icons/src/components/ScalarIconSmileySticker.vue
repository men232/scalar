/* GENERATED FILE */
<script lang="ts">
export default {
  name: 'ScalarIconSmileySticker',
}
</script>
<script lang="ts" setup>
import { useScalarIcon } from '@/hooks'
import type { ScalarIconProps } from '@/types'

const props = defineProps<ScalarIconProps>()

const { bind, weight } = useScalarIcon(props)
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    v-bind="bind">
    <slot />
    <g v-if="weight === 'bold'">
      <path
        d="M128,20a108,108,0,1,0,31.74,211.26,12,12,0,0,0,5-3l63.57-63.57a12.05,12.05,0,0,0,3-5A108.08,108.08,0,0,0,128,20Zm81.12,129.91-59.2,59.2a83.87,83.87,0,1,1,59.2-59.2ZM76,108a16,16,0,1,1,16,16A16,16,0,0,1,76,108Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,180,108Zm-1.61,50c-11,19.06-29.39,30-50.39,30s-39.36-10.93-50.39-30a12,12,0,0,1,20.78-12c3.89,6.73,12.91,18,29.61,18s25.72-11.28,29.61-18a12,12,0,1,1,20.78,12Z" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M224,128a95.91,95.91,0,0,1-4.21,28.21l-63.57,63.58A96,96,0,1,1,224,128Z"
        opacity="0.2" />
      <path
        d="M174.92,156c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM232,128a104.35,104.35,0,0,1-4.56,30.56,8,8,0,0,1-2,3.31l-63.57,63.57a7.9,7.9,0,0,1-3.3,2A104,104,0,1,1,232,128Zm-16,0a87.89,87.89,0,1,0-64,84.69L212.69,152A88.05,88.05,0,0,0,216,128ZM92,120a12,12,0,1,0-12-12A12,12,0,0,0,92,120Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,96Z" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M128,24a104,104,0,1,0,30.57,203.43,7.9,7.9,0,0,0,3.3-2l63.57-63.57a8,8,0,0,0,2-3.31A104.09,104.09,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M128,26a102,102,0,1,0,30,199.52,6,6,0,0,0,2.48-1.49L224,160.46a6,6,0,0,0,1.49-2.49A102.06,102.06,0,0,0,128,26Zm86.47,127-61.42,61.43A89.91,89.91,0,1,1,214.47,153ZM82,108a10,10,0,1,1,10,10A10,10,0,0,1,82,108Zm92,0a10,10,0,1,1-10-10A10,10,0,0,1,174,108Zm-.81,47c-9.92,17.16-26.39,27-45.19,27s-35.27-9.84-45.19-27a6,6,0,0,1,10.38-6c7.84,13.54,20.2,21,34.81,21s27-7.46,34.81-21a6,6,0,1,1,10.38,6Z" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M174.92,156c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.93-28a8,8,0,1,1,13.86-8c7.46,12.91,19.2,20,33.07,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM232,128a104.35,104.35,0,0,1-4.56,30.56,8,8,0,0,1-2,3.31l-63.57,63.57a7.9,7.9,0,0,1-3.3,2A104,104,0,1,1,232,128Zm-16,0a87.89,87.89,0,1,0-64,84.69L212.69,152A88.05,88.05,0,0,0,216,128ZM92,120a12,12,0,1,0-12-12A12,12,0,0,0,92,120Zm72-24a12,12,0,1,0,12,12A12,12,0,0,0,164,96Z" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M128,28a100,100,0,1,0,29.39,195.61,3.94,3.94,0,0,0,1.66-1L222.62,159a4,4,0,0,0,1-1.65A100.07,100.07,0,0,0,128,28Zm88.25,126.1L154.1,216.25a91.88,91.88,0,1,1,62.15-62.15ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm88,0a8,8,0,1,1-8-8A8,8,0,0,1,172,108Zm-.54,46c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4Z" />
    </g>
  </svg>
</template>
