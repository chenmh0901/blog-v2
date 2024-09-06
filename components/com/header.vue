<script setup lang="ts"></script>
<template>
  <div class="header">
    <div class="header_logo">
      <NuxtLink to="/" class="name">Amumu's Blog</NuxtLink>
    </div>
    <div class="header_nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/post">Post</NuxtLink>
      <NuxtLink to="/book">Books</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply max-w-[1000px] mx-auto w-full;

  @apply flex justify-between items-center;
  @apply p-8;

  &_nav {
    @apply flex gap-10;
  }
}

.name {
  @apply text-2xl font-bold;
}
</style>
