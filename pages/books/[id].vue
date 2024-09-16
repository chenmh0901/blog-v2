<script setup lang="ts">
import { readItem } from '@directus/sdk'
import type { Book } from '~/types/from-directus'
import MarkdownIt from 'markdown-it'
import { formateDate } from '~/utils/time'

definePageMeta({
  layout: 'base',
})

const route = useRoute()
const id = route.params.id

const book = ref<Book>()
const mdContent = ref()

const readPost = async (id: string) => {
  const data = await client.request<Book>(
    readItem(dirStaticConfig.bookColletion, id),
  )

  return data
}

onMounted(async () => {
  book.value = await readPost(id as string)
  mdContent.value = new MarkdownIt().render(book.value?.book_content)
})
</script>
<template>
  <div v-if="book" class="md-content">
    <header>
      <h1>{{ book.book_name }}</h1>
      <h2>{{ book.book_author }}</h2>

      <p class="date">
        创建于 {{ formateDate(book.date_created) }}

        <span v-if="book.date_updated" class="text-gray-300 mx-4">|</span>
        {{ book.date_updated && `上次更新于${formateDate(book.date_updated)}` }}
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
