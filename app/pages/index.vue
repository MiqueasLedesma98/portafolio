<template>
  <UPageLogos class="my-14" :marquee="{ reverse: true }" :items="frontendTech" />

  <UPageHero v-motion-pop-visible-once :delay="500" title="Miqueas Ledesma Amós" description="Full Stack Developer" />

  <UPageLogos class="my-14" marquee :items="backendTech" />

  <UPageCTA v-motion-fade-visible-once :links="links" title="Desarrollador Full-Stack con +3 años de experiencia"
    description="Especializado en JavaScript/TypeScript, he liderado el desarrollo de CRMs, implementado pasarelas de pago y creado aplicaciones móviles nativas. Domino tecnologías como React, Next.js, Vue, Node.js, MongoDB y React Native, aplicando metodologías ágiles como SCRUM para entregar soluciones eficientes y escalables."
    orientation="horizontal" reverse>
    <img v-motion-roll-visible-once-top src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration"
      class="w-full rounded-lg" />
  </UPageCTA>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([{ label: 'Mi Stack', color: 'neutral', trailingIcon: 'i-lucide-arrow-right', to: '/stack' }])

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