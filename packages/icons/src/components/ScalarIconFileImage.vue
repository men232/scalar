/* GENERATED FILE */
<script lang="ts">
export default {
  name: 'ScalarIconFileImage',
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
        d="M114,145.34a12,12,0,0,0-20,0L79,167.82,72.3,157.73a12,12,0,0,0-20.07.17L13.91,217.51A12,12,0,0,0,24,236H152a12,12,0,0,0,10-18.66ZM46,212,62.5,186.3l6.55,9.81a12,12,0,0,0,20,0l15-22.48L129.58,212ZM216.49,79.51l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v84a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48V212a12,12,0,0,0,0,24h4a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.51ZM160,57l23,23H160Z" />
    </g>
    <g v-else-if="weight === 'duotone'">
      <path
        d="M104,152l48,72H24l36-56,16.36,25.45ZM152,32V88h56Z"
        opacity="0.2" />
      <path
        d="M110.66,147.56a8,8,0,0,0-13.32,0L76.49,178.85l-9.76-15.18a8,8,0,0,0-13.46,0l-36,56A8,8,0,0,0,24,232H152a8,8,0,0,0,6.66-12.44ZM38.65,216,60,182.79l9.63,15a8,8,0,0,0,13.39.11l21-31.47L137.05,216Zm175-133.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z" />
    </g>
    <g v-else-if="weight === 'fill'">
      <path
        d="M158.66,219.56A8,8,0,0,1,152,232H24a8,8,0,0,1-6.73-12.33l36-56a8,8,0,0,1,13.46,0l9.76,15.18,20.85-31.29a8,8,0,0,1,13.32,0ZM216,88V216a16,16,0,0,1-16,16h-8a8,8,0,0,1,0-16h8V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-56-8h28.69L160,51.31Z" />
    </g>
    <g v-else-if="weight === 'light'">
      <path
        d="M109,148.67a6,6,0,0,0-10,0L76.46,182.5,65.05,164.76a6,6,0,0,0-10.1,0l-36,56A6,6,0,0,0,24,230H152a6,6,0,0,0,5-9.33ZM35,218l25-38.9,11.32,17.6a6,6,0,0,0,10,.08l22.64-34L140.79,218ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v88a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216a2,2,0,0,1-2,2h-8a6,6,0,0,0,0,12h8a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158Z" />
    </g>
    <g v-else-if="weight === 'regular'">
      <path
        d="M110.66,147.56a8,8,0,0,0-13.32,0L76.49,178.85l-9.76-15.18a8,8,0,0,0-13.46,0l-36,56A8,8,0,0,0,24,232H152a8,8,0,0,0,6.66-12.44ZM38.65,216,60,182.79l9.63,15a8,8,0,0,0,13.39.11l21-31.47L137.05,216Zm175-133.66-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v88a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48V216h-8a8,8,0,0,0,0,16h8a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160Z" />
    </g>
    <g v-else-if="weight === 'thin'">
      <path
        d="M107.33,149.78a4,4,0,0,0-6.66,0L76.42,186.15,63.36,165.84a4,4,0,0,0-6.72,0l-36,56A4,4,0,0,0,24,228H152a4,4,0,0,0,3.33-6.22ZM31.33,220,60,175.4l13,20.22a4,4,0,0,0,3.33,1.83,3.93,3.93,0,0,0,3.36-1.78L104,159.21,144.53,220ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v88a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216a4,4,0,0,1-4,4h-8a4,4,0,0,0,0,8h8a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156Z" />
    </g>
  </svg>
</template>
