<script setup lang="ts">
import { readItem } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import MarkdownIt from 'markdown-it'
import { formateDate } from '~/utils/time'

definePageMeta({
  layout: 'base',
})

const route = useRoute()
const id = route.params.id

const post = ref<Post>()
const mdContent = ref()

const readPost = async (id: string) => {
  const data = await client.request<Post>(
    readItem(dirStaticConfig.postCollection, id),
  )

  return data
}

onMounted(async () => {
  post.value = await readPost(id as string)
  mdContent.value = new MarkdownIt().render(post.value.content)
})
</script>
<template>
  <div v-if="post" class="md-content">
    <header>
      <h1>{{ post.title }}</h1>
      <h2>{{ post.sub_title }}</h2>

      <p class="date">
        创建于 {{ formateDate(post.date_created) }}

        <span v-if="post.date_updated" class="text-gray-300 mx-4">|</span>
        {{ post.date_updated && `上次更新于${formateDate(post.date_updated)}` }}
      </p>
    </header>

    <div v-html="mdContent" class="prose mx-auto mt-16 dark:prose-invert"></div>
  </div>
</template>

<style scoped lang="scss">
.md-content {
  @apply p-4 pb-48;

  header {
    @apply flex flex-col gap-6;
    @apply pb-5 pt-8;

    h1 {
      @apply text-4xl font-semibold self-center;
      @apply dark:text-gray-300;
    }

    h2 {
      @apply text-lg text-gray-800 self-center;
      @apply dark:text-gray-300;
    }

    .date {
      @apply text-gray-500 text-xs self-center;
      @apply dark:text-gray-300;
    }
  }
}
</style>
