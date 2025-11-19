<template>
  <UPageLogos class="my-14" :marquee="{ reverse: true }" :items="frontendTech" />

  <UPageHero title="Miqueas Ledesma Amós" description="Full Stack Developer" />

  <UPageLogos class="my-14" marquee :items="backendTech" />

  <UPageCTA v-motion-fade-visible-once :links="links" title="Trusted and supported by our amazing community"
    description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success."
    orientation="horizontal" reverse>
    <img v-motion-roll-visible-once-top src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration"
      class="w-full rounded-lg" />
  </UPageCTA>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([{ label: 'Contacto', color: 'neutral', trailingIcon: 'i-lucide-arrow-right', to: '/contacto' }])

// Tecnologías Frontend - giran normal (hacia la derecha)
const frontendTech = [
  'simple-icons:css',
  'simple-icons:html5',
  'i-simple-icons-tailwindcss',
  'i-simple-icons-react',
  'simple-icons:android',
  'devicon-plain:nextjs',
  'simple-icons:vuedotjs',
  'devicon-plain:nuxtjs',
]

// Tecnologías Backend - giran reversa (hacia la izquierda)
const backendTech = [
  'i-simple-icons-typescript',
  'mdi:nodejs',
  'devicon-plain:mongodb-wordmark',
  'devicon-plain:postgresql',
  'i-simple-icons-express',
  'simple-icons:nestjs',
  'uil:docker',
  'simple-icons:cloudflare',
]
</script>