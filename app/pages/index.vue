<template>
  <main>

    <UPageLogos class="my-14" :marquee="{ reverse: true }" :items="frontendTech" />

    <UPageHero spotlight v-motion-pop-visible-once :delay="300" title="Miqueas Amós Ledesma"
      description="Full Stack Developer"
      :links="[{ label: 'Hoja de vida', icon: 'ion:document', color: 'neutral', to: '/cv_ml.pdf', target: '_blank', noRel: true }, { label: 'Correo', icon: 'mdi:gmail', color: 'neutral', to: 'mailto:miqueasledesmadev@gmail.com', target: '_blank', noRel: true }]" />

    <UPageLogos class="my-14" marquee :items="backendTech" />

    <UPageCTA v-motion-fade-visible-once :delay="300" :links="links"
      title="Desarrollador Full-Stack con +3 años de experiencia"
      description="Especializado en JavaScript/TypeScript, he liderado el desarrollo de CRMs, implementado pasarelas de pago y creado aplicaciones móviles nativas. Domino tecnologías como React, Next.js, Vue, Node.js, MongoDB y React Native, aplicando metodologías ágiles como SCRUM para entregar soluciones eficientes y escalables."
      orientation="horizontal" reverse>
      <ParallaxImage />
    </UPageCTA>
  </main>
</template>

<script lang="ts" setup>
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([{ label: 'Mi Stack', trailingIcon: 'i-lucide-arrow-right', to: '/stack' }])

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