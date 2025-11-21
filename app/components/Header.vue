<template>
  <UHeader mode="slideover">
    <template #title>
      <ULink as="button" to="/">Miqueas Ledesma</ULink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
  { label: 'Mi Stack', to: '/stack', },
  { label: 'Proyectos', to: '/proyecto' },
  { label: 'Experiencia', to: '/experiencia' },
  { label: 'Contacto', to: '/contacto' },
])

</script>
