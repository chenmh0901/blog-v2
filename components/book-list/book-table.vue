<script setup lang="ts">
import type { Book } from '~/types/from-directus'
import Item from './item.vue'

defineProps<{
  books: Book[]
}>()
</script>
<template>
  <table v-if="books" class="book-table">
    <thead>
      <tr>
        <th class="!pl-4 book-table_title">书名</th>
        <th class="book-table_title">作者</th>
        <th class="book-table_title">类型</th>

        <th class="responsive-th">状态</th>
        <th class="responsive-th">日期</th>
        <th class="responsive-th">备注</th>
      </tr>
    </thead>
    <tbody>
      <Item v-for="book in books" :key="book.id" :book="book" />
    </tbody>
  </table>
</template>

<style scoped lang="scss">
.book-table {
  @apply mb-48;
  @apply w-full;
  @apply shadow-md rounded-lg;
}

.book-table_title {
  @apply text-xl text-gray-800;
  @apply font-light text-start;
  @apply border rounded p-2 dark:border-gray-500 dark:text-gray-300;
}

.responsive-th {
  @apply hidden md:table-cell;
  @apply book-table_title;
}

@media (max-width: 768px) {
  .flexible-th {
    @apply book-table_title;
  }
}
</style>
