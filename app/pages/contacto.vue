<template>
  <UPage>
    <UPageCTA title="Envíame tu mensaje"
      description="Estoy disponible para nuevos proyectos, consultas y colaboraciones. ¡Hablemos!" />

    <UPageSection class="mt-6">
      <UForm :schema="emailSchema" :state="form" @submit="handleSubmit" class="w-full max-w-xl mx-auto space-y-5">
        <!-- EMAIL -->
        <UFormField label="Correo electrónico" name="email" required>
          <UInput class="w-full" icon="mdi:gmail" v-model="form.email" placeholder="tu-correo@example.com" />
        </UFormField>

        <!-- ASUNTO -->
        <UFormField label="Motivo del contacto" name="asunto" required>
          <USelect class="w-full" icon="material-symbols:subject" v-model="form.asunto" :items="asuntos"
            placeholder="Selecciona un motivo" />
        </UFormField>

        <!-- MENSAJE -->
        <UFormField label="Mensaje" name="mensaje" required>
          <UTextarea class="w-full" icon="tabler:message" v-model="form.mensaje"
            placeholder="Hola, me gustaría hablar sobre..." autoresize />
        </UFormField>

        <UButton type="submit" block>
          Enviar mensaje
        </UButton>
      </UForm>
    </UPageSection>
  </UPage>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'

// Estado del formulario
const form = ref({
  email: '',
  asunto: '',
  mensaje: ''
})

// Opciones del select
const asuntos = ref([
  'Trabajo',
  'Consulta',
  'Feedback',
  'Colaboración'
])

// Envío del formulario
const handleSubmit: (event: FormSubmitEvent<any>) => void = (event) => {
  console.log(event.data)
  form.value = { email: '', asunto: '', mensaje: '' }
}

</script>
