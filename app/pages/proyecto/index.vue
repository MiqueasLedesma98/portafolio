<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'

const projects = ref<BlogPostProps[]>([
  {
    title: 'E-commerce Moderno',
    description: 'Plataforma de comercio electrónico con Vue.js y Nuxt 3',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    date: '2024-11-25',
    badge: 'Web',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Panel de control con gráficos interactivos y métricas en tiempo real',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    date: '2024-11-15',
    badge: 'Web',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  },
  {
    title: 'App Móvil Delivery',
    description: 'Aplicación de delivery con seguimiento en tiempo real',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    date: '2024-11-05',
    badge: 'Mobile',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  },
  {
    title: 'Sistema de Reservas',
    description: 'Plataforma de reservas online para hoteles y restaurantes',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    date: '2024-10-28',
    badge: 'Web',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web personal con blog integrado y modo oscuro',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    date: '2024-10-20',
    badge: 'Web',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  },
  {
    title: 'API REST Microservicios',
    description: 'Arquitectura escalable con autenticación JWT y Docker',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    date: '2024-10-15',
    badge: 'Web',
    authors: [
      { name: 'React', description: 'Frontend', avatar: { icon: 'mdi:react' } },
      { name: 'Express', description: 'Backend', avatar: { icon: 'simple-icons:express' } }
    ],
    to: '/proyecto/id'
  }
])

// Filtros y búsqueda
const searchQuery = ref('')

// Proyectos filtrados
const filteredProjects = computed<BlogPostProps[]>(() => {
  const query = searchQuery.value.trim()
  if (!query) return projects.value

  try {
    const regExp = new RegExp(query, 'i')
    // @ts-ignore
    return projects.value.filter((e: BlogPostProps) => regExp.test(e.title || ''))
  } catch {
    const lower = query.toLowerCase()
    return projects.value.filter((e: BlogPostProps) => (e.title || '').toLowerCase().includes(lower))
  }
})

// Función para formatear fecha
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<template>
  <UPage>
    <!-- Grid de Proyectos -->
    <UPageSection>
      <!-- Filtros y Búsqueda -->
      <UInput v-model="searchQuery" placeholder="Buscar proyectos por nombre, descripción o tecnología..."
        icon="i-heroicons-magnifying-glass" size="lg" />
      <UPageColumns>
        <UBlogPost v-for="project in filteredProjects" :key="project.title" v-bind="project" />
      </UPageColumns>
      <!-- Estado vacío -->
      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-magnifying-glass" class="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No se encontraron proyectos
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          Intenta con otros términos de búsqueda o selecciona otra categoría
        </p>
      </div>
    </UPageSection>

  </UPage>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:text-primary-600 {
  color: rgb(59 130 246);
}
</style>