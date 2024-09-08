<script setup lang="ts">
const activedTag = defineModel<string>()
</script>
<template>
  <div class="tag-filter">
    <div
      class="post-tag"
      @click="activedTag = ''"
      :class="!activedTag ? 'selected' : ''"
    >
      选择全部
    </div>
    <div class="divider" />
    <div
      v-for="tag in dirStaticConfig.postTags"
      class="post-tag"
      :class="activedTag === tag ? 'selected' : ''"
      @click="activedTag = activedTag === tag ? '' : tag"
    >
      {{ tag }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tag-filter {
  @apply flex flex-wrap gap-4;
}

.post-tag {
  @apply text-xs text-gray-600;
  @apply rounded-full shadow-md px-[10px] py-[3px];
  @apply inline-block cursor-pointer;
  @apply bg-opacity-50 bg-purple-50;
}
.divider {
  @apply w-[1px] h-[16px];
  @apply bg-gray-300;
  @apply self-center;
}

.selected {
  @apply bg-purple-400 text-white;
}
</style>
