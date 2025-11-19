<template>
  <UHeader>
    <template #title>
      <ULink to="/">Miqueas Ledesma</ULink>
    </template>

    <UNavigationMenu :items="items" @click="console.log" />

    <template #right>
      <UColorModeButton />
    </template>

  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
  { label: 'Mi Stack', to: '/stack', },
  { label: 'Proyectos', to: '/proyecto' },
  { label: 'Contacto', to: '/contacto' },
])

</script>
