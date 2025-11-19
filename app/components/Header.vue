<template>
  <UHeader>
    <template #title>
      <ULink to="/">Miqueas Ledesma</ULink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
    </template>

  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
  { label: 'Contacto', to: '/contacto', },
  { label: 'Proyectos', to: '/proyecto', },
  { label: 'Mi Stack', to: '/stack', },
])


</script>
