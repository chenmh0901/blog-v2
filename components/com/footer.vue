<script setup lang="ts"></script>
<template>
  <div class="footer">
    <div class="footer_logo">
      <NuxtLink to="https://github.com/Nesb01t/meteor-v2"
        >MeteorTemplate V2</NuxtLink
      >
      <NuxtLink to="https://nuxt.com/">Powered by Nuxt.js</NuxtLink>
    </div>
    <div class="footer_nav">
      <NuxtLink to="https://beian.miit.gov.cn/">浙ICP备2024110118号-1</NuxtLink>
      <div>
        <NuxtLink to="https://github.com/chenmh0901">我的 Github</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply mt-auto mx-auto w-full max-w-[1000px];

  @apply flex justify-between items-center;
  @apply p-4 pb-8;

  &_logo {
    @apply flex flex-col gap-2;

    @apply text-sm;
  }

  &_nav {
    @apply flex flex-col gap-2 items-end;

    @apply text-xs;
  }
}
</style>
