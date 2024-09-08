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
        <th class="!pl-4">书名</th>
        <th>作者</th>
        <th>类型</th>
        <th>状态</th>
        <th>日期</th>
        <th>备注</th>
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

  th {
    @apply text-xl text-gray-800;
    @apply font-light text-start;
    @apply border rounded p-2;
  }
}
</style>
