<script setup lang="ts">
import type { Project } from '~/types/from-directus'
import TechTag from './tech-tag.vue'
defineProps<{
  project: Project
  reverse: Boolean
}>()

const openUrl = (url: string) => {
  if (url) window.open(url, '_blank')
}
const imgLoading = ref(true)
</script>
<template>
  <div class="project-card" :class="reverse ? 'reverse' : ''">
    <div class="project-card_cover">
      <NuxtImg
        v-if="project.cover"
        :src="dirAssetsSrc(project.cover)"
        alt="project image"
        loading="lazy"
        @click="() => openUrl(project.url)"
        @load="imgLoading = false"
      />
      <div v-if="imgLoading" class="text-sm flex items-center gap-1">
        <Icon name="eos-icons:loading" />Loading...
      </div>
    </div>

    <div class="project-card_content">
      <h1 class="name">{{ project.name }}</h1>

      <p class="status">{{ project.status }}</p>
      <p class="description" v-html="project.description" />

      <ul class="tech-stack">
        <TechTag v-for="t in project.tech_stack" :tech="t" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  @apply flex flex-col md:flex-row gap-8 min-h-[200px];

  &:hover {
    @apply gap-12;

    .project-card_cover {
      @apply scale-110;
    }
  }

  &_cover {
    @apply w-full md:w-1/3 h-[130px] md:h-[200px];
    @apply transition-all duration-300;
    @apply overflow-hidden rounded-lg;
    @apply shadow-lg cursor-pointer;
    @apply bg-gray-400 flex justify-center items-center;

    img {
      @apply w-full h-full object-cover;
    }
  }

  &_content {
    @apply flex-1 gap-4 flex flex-col;
    @apply justify-center dark:text-gray-300;

    .name {
      @apply text-2xl font-semibold;
    }

    .status {
      @apply text-xs mt-[-12px] text-violet-600 opacity-50 dark:text-violet-400;
    }

    .description {
      @apply text-wrap;
      @apply text-sm text-left;
    }

    .tech-stack {
      @apply flex gap-5 flex-wrap;
    }
  }
}

.reverse {
  @apply md:flex-row-reverse;

  .project-card_content {
    @apply md:items-end;

    .description {
      @apply md:text-right;
    }
  }
}
</style>
