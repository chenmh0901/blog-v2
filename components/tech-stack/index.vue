<script setup lang="ts">
import { getIconName } from '~/utils/icon-mapping'
const techStack = [
  {
    name: 'Web框架',
    list: ['vue', 'nuxtjs', 'react'],
  },
  {
    name: 'Web设计',
    list: ['tailwindcss', 'element', 'antd', 'sass', 'shadcnui'],
  },
  {
    name: '客户端',
    list: ['ionic', 'flutter', 'uniapp'],
  },
  {
    name: 'BFF/工程化',
    list: ['vite', 'eslint', 'prettier', 'nginx'],
  },
  {
    name: '工具/软件',
    list: ['git', 'github', 'postman', 'notion', 'vscode'],
  },
  {
    name: '常用语言',
    list: ['javascript', 'typescript', 'nodejs'],
  },
]
</script>
<template>
  <div class="tech-stack">
    <h2 class="tech-stack_title">技术栈</h2>
    <ul class="block">
      <div v-for="tech in techStack" class="block_tech">
        <h3 class="block_title">{{ tech.name }}</h3>
        <div class="block_list">
          <div class="block_item" v-for="t in tech.list">
            <img
              v-if="t == 'uniapp'"
              src="/assets/icons/uni-app.png"
              alt="uniapp"
              class="w-[16px] h-[16px]"
            />
            <Icon v-else :name="getIconName(t)" class="w-[16px] h-[16px]" />
            {{ t }}
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.tech-stack {
  @apply p-4 pt-2 border shadow rounded-lg dark:border-none;
  @apply w-full;

  &_title {
    @apply my-3 text-xl font-semibold dark:text-gray-300;
  }
}

.block {
  @apply flex gap-6 flex-wrap;
  @apply dark:text-gray-300;

  &_tech {
    @apply flex flex-col items-center;
  }

  &_title {
    @apply font-semibold;
    @apply my-2;
  }

  &_list {
    @apply gap-1 flex flex-col;
  }

  &_item {
    @apply w-[100px];
    @apply flex justify-between items-center text-sm;
  }
}
</style>
