<template>

  <UFooter>
    <template #left>
      <p class="text-muted text-sm">Copyright © {{ new Date().getFullYear() }}</p>
    </template>

    <u-navigation-menu :items="items" variant="link" />


    <template #right>
      <UButton icon="i-simple-icons-instagram" color="neutral" variant="ghost"
        to="https://www.instagram.com/miqueasledesma98" target="_blank" aria-label="instagram" />
      <UButton icon="i-simple-icons-gitlab" color="neutral" variant="ghost" to="https://gitlab.com/miqueasledesmadev"
        target="_blank" aria-label="X" />
      <UButton icon="i-simple-icons-github" color="neutral" variant="ghost" to="https://github.com/MiqueasLedesma98"
        target="_blank" aria-label="GitHub" />
    </template>

  </UFooter>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
  {
    label: 'Contacto',
    to: '/contacto',
  }
];


</script>
