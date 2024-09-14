<script setup lang="ts">
import type { Book } from '~/types/from-directus'
import { formateDate } from '~/utils/time'

defineProps<{
  book: Book
}>()
const router = useRouter()
const to = (id: number) => {
  router.push(`/books/${id}`)
}
</script>
<template>
  <tr v-if="book" class="book" @click="to(book.id)">
    <td class="book_name">{{ book.book_name }}</td>
    <td class="book_author">{{ book.book_author }}</td>
    <td class="book_type">{{ book.book_type }}</td>

    <td class="book_status">{{ book.status }}</td>
    <td class="book_date">{{ formateDate(book.book_date) }}</td>
    <td class="book_remark">{{ book.remark }}</td>
  </tr>
</template>

<style scoped lang="scss">
.book {
  @apply hover:bg-gray-300 dark:hover:bg-gray-600;
  @apply cursor-pointer;

  td {
    @apply font-light text-sm;
    @apply p-2;
    @apply border dark:border-gray-500;
  }

  &_name {
    @apply text-start text-wrap text-lg;
    @apply w-52 dark:text-gray-200;
  }

  &_author {
    @apply text-start;
    @apply dark:text-gray-200;
  }

  &_type {
    @apply w-24;
    @apply dark:text-gray-200;
  }

  &_status {
    @apply hidden;
    @apply td-block;
    @apply dark:text-gray-200;
  }

  &_date {
    @apply md:text-gray-600 md:text-start;
    @apply hidden;
    @apply td-block;
    @apply dark:text-gray-200;
  }

  &_remark {
    @apply hidden;
    @apply td-block;
    @apply dark:text-gray-200;
  }
}

.td-block {
  @apply md:table-cell;
}
</style>
