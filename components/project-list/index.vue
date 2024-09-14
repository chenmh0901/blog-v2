<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Project } from '~/types/from-directus'
import Card from './card.vue'

const projects = ref()

const readProjects = async () => {
  const data = await client.request<Project>(
    readItems(dirStaticConfig.projectCollection, { sort: 'id' }),
  )
  return data
}

onMounted(async () => {
  projects.value = await readProjects()
})
</script>
<template>
  <div class="project-list">
    <Card v-for="p in projects" :project="p" :reverse="p.id % 2 === 0" />
  </div>
</template>

<style scoped lang="scss">
.project-list {
  @apply p-4 pb-48 mt-4;
  @apply flex flex-col gap-24;
}
</style>
