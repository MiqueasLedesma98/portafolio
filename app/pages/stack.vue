<template>
  <UPage>
    <UPageSection title="Frontend"
      description="Desarrollo de interfaces modernas y experiencias de usuario excepcionales">
      <UPageGrid class="m-4">
        <UPageCard v-for="tech in front" :key="tech.title" v-bind="tech" spotlight spotlight-color="secondary" />
      </UPageGrid>
    </UPageSection>
    <UPageSection title="Backend" description="Arquitectura robusta, APIs escalables y gestión de datos eficiente">
      <UPageGrid class="m-4">
        <UPageCard v-for="tech in back" :key="tech.title" v-bind="tech" spotlight spotlight-color="primary" />
      </UPageGrid>
    </UPageSection>
  </UPage>
</template>

<script lang="ts" setup>
import type { PageCardProps } from '@nuxt/ui';

const front = ref<PageCardProps[]>([
  {
    title: 'CSS',
    icon: 'simple-icons:css',
    description: 'Hojas de estilo en cascada para diseñar y dar formato a páginas web'
  },
  {
    title: 'HTML5',
    icon: 'simple-icons:html5',
    description: 'Lenguaje de marcado estándar para estructurar contenido web'
  },
  {
    title: 'Tailwind CSS',
    icon: 'i-simple-icons-tailwindcss',
    description: 'Framework de CSS utilitario para diseñar interfaces rápidamente'
  },
  {
    title: 'React',
    icon: 'i-simple-icons-react',
    description: 'Biblioteca de JavaScript para construir interfaces de usuario interactivas'
  },
  {
    title: 'Android',
    icon: 'simple-icons:android',
    description: 'Sistema operativo móvil para desarrollo de aplicaciones nativas'
  },
  {
    title: 'NextJS',
    icon: 'devicon-plain:nextjs',
    description: 'Framework de React para aplicaciones web con renderizado híbrido'
  },
  {
    title: 'Vue.js',
    icon: 'simple-icons:vuedotjs',
    description: 'Framework progresivo de JavaScript para construir interfaces de usuario'
  },
  {
    title: 'NuxtJS',
    icon: 'devicon-plain:nuxtjs',
    description: 'Framework de Vue.js para aplicaciones universales y estáticas'
  },
]);

const back = ref<PageCardProps[]>([
  {
    title: 'TypeScript',
    icon: 'i-simple-icons-typescript',
    description: 'Superset tipado de JavaScript que mejora la calidad del código'
  },
  {
    title: 'Node.js',
    icon: 'mdi:nodejs',
    description: 'Entorno de ejecución de JavaScript para el lado del servidor'
  },
  {
    title: 'MongoDB',
    icon: 'devicon-plain:mongodb-wordmark',
    description: 'Base de datos NoSQL orientada a documentos para aplicaciones modernas'
  },
  {
    title: 'PostgreSQL',
    icon: 'devicon-plain:postgresql',
    description: 'Sistema de base de datos relacional avanzado y de código abierto'
  },
  {
    title: 'Express',
    icon: 'i-simple-icons-express',
    description: 'Framework minimalista de Node.js para aplicaciones web y APIs'
  },
  {
    title: 'NestJS',
    icon: 'simple-icons:nestjs',
    description: 'Framework progresivo de Node.js para aplicaciones escalables del lado del servidor'
  },
  {
    title: 'Docker',
    icon: 'uil:docker',
    description: 'Plataforma para contenerizar y distribuir aplicaciones en contenedores'
  },
  {
    title: 'Cloudflare',
    icon: 'simple-icons:cloudflare',
    description: 'Plataforma de seguridad, rendimiento y confiabilidad para aplicaciones web'
  },
]);

</script>
