<script setup lang="ts">
import type { Post } from '~/types/from-directus'
import Hero from '../com/hero.vue'
import Card from './card.vue'
import { readItems } from '@directus/sdk'

const posts = ref()

const readPosts = async () => {
  const data = client.request<Post>(
    readItems(dirStaticConfig.postCollection, { sort: '-date_updated' }),
  )

  console.log(data)
  return data
}

onMounted(async () => {
  posts.value = await readPosts()
})
</script>
<template>
  <div class="post-list">
    <Hero title="Post" descpition="一些日常博客、学习笔记、面经和随记。" />
    <ul class="post-list_content">
      <Card v-for="post in posts" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.post-list {
  @apply p-4;

  &_content {
    @apply flex flex-wrap gap-5;
  }
}
</style>
