<template>
  <UPage>
    <UPageSection>
      <UChangelogVersions lang="es-ES" :versions="experiencias">
        <template #date="props">
          {{
            typeof props.version.date === 'string'
              ? 'Actualidad'
              : (() => {
                const text = props.version.date!.toLocaleString('es-ES', {
                  month: 'short',
                  year: 'numeric'
                })
                return text.charAt(0).toUpperCase() + text.slice(1)
              })()
          }}
        </template>
      </UChangelogVersions>
    </UPageSection>
  </UPage>
</template>

<script lang="ts" setup>
import type { ChangelogVersionProps } from '@nuxt/ui'


const experiencias = ref<ChangelogVersionProps[]>([
  {
    title: 'Apps Chronos',
    description: `Actualmente me encargo del desarrollo de nuevas funcionalidades y de resolver Bugs para un CRM de talleres utilizando React, React-Native, Express, Node, Nginx, MongoDB, Material UI. 
Para organizarnos utilizamos Trello y Discord.`,
    badge: 'Full-Stack developer',
    date: 'actual',
    image: '/chrono.webp'
  },
  {
    title: 'Zirio',
    description: `Durante mi rol como desarrollador Full-Stack en Zirio DAO, me dedico a brindar soporte y a implementar nuevas funcionalidades y componentes. Las tecnologías que empleo en este entorno incluyen Next.js (un framework de React), JavaScript y CSS.
Además, en nuestro proceso de desarrollo, hacemos uso de Figma como herramienta de diseño web y Discord para la gestión y distribución eficiente de tareas dentro del equipo. Nuestra metodología de trabajo se basa en SCRUM.`,
    badge: 'Full-Stack developer',
    date: new Date(
      '2024-01-01T12:00'
    ),
    image: '/zirio.webp',
  },
  {
    title: 'Eiche Chile',
    description: `Durante mi tiempo en el equipo de Eiche Chile en calidad de desarrollador Full Stack Web. En mi rol, me ocupo de realizar diversas tareas que abarcan el uso de tecnologías como React, MaterialUI, Vue.js y Quasar en el frontend, así como Adonis.js y MongoDB en el backend.
Mis responsabilidades principales incluyen la resolución de problemas (bugs), el mantenimiento y la implementación de nuevas funcionalidades. Además, llevo a cabo la migración de sitios web a versiones más recientes y aplico el diseño responsive utilizando figmas como punto de partida.`,
    badge: 'Full-Stack developer',
    date: new Date('2023-05-17'),
    image: '/eiche.webp'
  }
])

</script>
