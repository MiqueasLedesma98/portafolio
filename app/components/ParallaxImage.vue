<script setup lang="ts">
import type { CSSProperties } from 'vue'
import { useParallax } from '@vueuse/core'
import { computed, ref } from 'vue'

const target = ref()
const parallax = useParallax(target)

const containerStyle: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '500px',
  perspective: '1000px',
}

const cardStyle = computed(() => {
  const roll = parallax.roll.value || 0
  const tilt = parallax.tilt.value || 0

  return {
    width: '300px',
    height: '400px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    transform: `rotateX(${roll * 10}deg) rotateY(${tilt * 10}deg)`,
    transition: 'transform 0.1s ease-out',
  } as CSSProperties
})

const imageStyle = computed(() => {
  const roll = parallax.roll.value || 0
  const tilt = parallax.tilt.value || 0

  return {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const, // Esto es importante
    transform: `translateX(${tilt * 20}px) translateY(${roll * 20}px) scale(1.1)`,
    transition: 'transform 0.1s ease-out',
  } as CSSProperties
})
</script>

<template>
  <div ref="target" :style="containerStyle">
    <div :style="cardStyle">
      <img src="/parallax.webp" alt="Parallax effect image" :style="imageStyle">
    </div>
  </div>
</template>

<style scoped>
div[ref="target"] {
  background: radial-gradient(circle at center, #4a5568 0%, #2d3748 100%);
}
</style>