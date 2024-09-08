<script setup lang="ts">
import Hero from '../com/hero.vue'
import type { Book } from '~/types/from-directus'
import { readItems } from '@directus/sdk'
import { formateDate } from '~/utils/time'
import TagFilter from '../com/tag-filter.vue'
import BookTable from './book-table.vue'

const books = ref()
const fetchingBooks = ref(true)

const readBooks = async () => {
  const data = client.request<Book>(
    readItems(dirStaticConfig.bookColletion, { sort: '-date_updated' }),
  )
  return data
}

onMounted(async () => {
  books.value = await readBooks()
  fetchingBooks.value = false

  console.log(books.value)
})

// filter
const activiedTag = ref<string>()
const filtedBooks = computed(() => {
  if (!activiedTag.value) return books.value

  return books.value.filter((book: Book) => {
    if (activiedTag.value) {
      return book.book_type === activiedTag.value
    }
  })
})
</script>
<template>
  <div class="book-list">
    <Hero
      title="Books"
      :descpition="`一些阅读过的书籍记录，包括文学、心理、技术等多个领域`"
    />
    <div
      v-if="fetchingBooks"
      class="opacity-80 text-sm flex gap-2 items-center"
    >
      <Icon name="eos-icons:loading" /><span>Loading...</span>
    </div>
    <span v-else-if="books?.[0]" class="opacity-80 text-xs">
      共 {{ books.length }} 本书，上次更新于
      {{ formateDate(books[0].date_updated) }}
    </span>

    <TagFilter
      class="my-6"
      v-model="activiedTag"
      :-tag-list="dirStaticConfig.bookTypes"
    />

    <BookTable :books="filtedBooks" />
  </div>
</template>

<style scoped lang="scss">
.book-list {
  @apply p-4;

  &_desc {
    @apply p-4;
  }
  &_content {
    @apply gap-5 pb-48;
  }
}
</style>
