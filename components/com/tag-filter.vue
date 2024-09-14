<script setup lang="ts">
import { getIconFillColor, getIconName } from '~/utils/icon-mapping'

defineProps<{
  TagList: string[]
}>()
const activedTag = defineModel<string>()
</script>
<template>
  <ul class="tag-filter">
    <div
      class="post-tag"
      @click="activedTag = ''"
      :class="!activedTag ? 'selected' : ''"
    >
      选择全部
    </div>
    <div class="divider" />
    <div
      v-for="tag in TagList"
      class="post-tag"
      :class="activedTag === tag ? 'selected' : ''"
      @click="activedTag = activedTag === tag ? '' : tag"
    >
      <Icon
        v-if="tag && activedTag !== tag"
        :name="getIconName(tag)"
        class="drop-shadow-sm"
        :style="{ color: getIconFillColor(tag) }"
      />
      {{ tag }}
    </div>
  </ul>
</template>

<style scoped lang="scss">
.tag-filter {
  @apply flex flex-wrap gap-4;
}

.post-tag {
  @apply text-sm text-gray-600 transition-all duration-300;
  @apply rounded-full shadow-md px-[10px] py-[3px];
  @apply inline-block cursor-pointer;
  @apply bg-opacity-50 bg-purple-50 dark:text-gray-300 dark:bg-opacity-10;
  @apply flex items-center gap-2;
}

.divider {
  @apply w-[1px] h-[16px];
  @apply bg-gray-300;
  @apply self-center;
}

.selected {
  @apply bg-violet-400 text-white;
  @apply dark:bg-violet-500;
}
</style>
