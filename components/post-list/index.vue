<script setup lang="ts">
import type { Post } from '~/types/from-directus'
import Hero from '../com/hero.vue'
import Card from './card.vue'
import { readItems } from '@directus/sdk'
import { formateDate } from '~/utils/time'
import TagFilter from './tag-filter.vue'

const posts = ref()
const fetchingPosts = ref(true)

const readPosts = async () => {
  const data = client.request<Post>(
    readItems(dirStaticConfig.postCollection, { sort: '-date_updated' }),
  )
  return data
}

onMounted(async () => {
  posts.value = await readPosts()
  fetchingPosts.value = false
})
</script>
<template>
  <div class="post-list">
    <Hero title="Post" :descpition="`一些日常博客、学习笔记、面经和随记`" />

    <div
      v-if="fetchingPosts"
      class="opacity-80 text-sm flex gap-2 items-center"
    >
      <Icon name="eos-icons:loading" /><span>Loading...</span>
    </div>
    <span v-else-if="posts?.[0]" class="opacity-80 text-xs">
      共 {{ posts.length }} 份笔记，上次更新于
      {{ formateDate(posts[0].date_updated) }}
    </span>

    <TagFilter class="my-6" />

    <ul class="post-list_content">
      <Card v-for="post in posts" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
.post-list {
  @apply p-4;

  &_desc {
    @apply p-4;
  }
  &_content {
    @apply flex flex-wrap gap-5;
  }
}
</style>
