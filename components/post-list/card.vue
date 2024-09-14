<script setup lang="ts">
import type { Post } from '~/types/from-directus'
import { getTagColor } from '~/utils/icon-mapping'
defineProps<{
  post: Post
}>()

const imgLoading = ref(true)
</script>
<template>
  <NuxtLink v-if="post" :href="`/posts/${post.id}`" class="post-card">
    <div class="post-card_cover">
      <NuxtImg
        v-if="post.cover"
        alt="post card"
        :src="dirAssetsSrc(post.cover)"
        loading="lazy"
        @load="imgLoading = false"
      />
      <div v-if="imgLoading" class="text-sm flex items-center gap-1">
        <Icon name="eos-icons:loading" />Loading...
      </div>
    </div>
    <div
      class="post-card_tag"
      :style="{ backgroundColor: getTagColor(post.tag) }"
    >
      <span>{{ post.tag }}</span>
    </div>

    <div class="post-card_desc">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.sub_title }}</h3>
    </div>
  </NuxtLink>
</template>

<style scoped lang="scss">
.post-card {
  @apply w-full relative;
  @apply border rounded-lg shadow-sm dark:border-none;
  @apply hover:scale-[101%] hover:shadow-md transition-all duration-150;

  &_cover {
    @apply flex justify-center items-center overflow-hidden;
    @apply h-[150px];
    @apply border-b rounded-t-lg dark:border-none;
    @apply bg-gray-400;
  }

  &_tag {
    @apply absolute top-0 right-2;
    @apply text-white text-xs;
    @apply rounded-b-md;
    @apply p-1;
  }

  &_desc {
    @apply flex flex-col gap-1 flex-1;
    @apply p-4 dark:bg-black/50 bg-white;

    h2 {
      @apply text-lg font-semibold;
    }

    h3 {
      @apply text-xs;
      @apply text-gray-500 dark:text-gray-400 !duration-150;
    }
  }

  img {
    @apply w-full h-full object-cover;
  }
}

.cardimg {
  @apply bg-cover;
}
</style>
