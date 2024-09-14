<script setup lang="ts">
import ColorMode from './color-mode.vue'
</script>
<template>
  <div class="header">
    <div class="header_logo">
      <NuxtLink to="/" class="name">Amumu's Blog</NuxtLink>
    </div>
    <div class="header_nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/books">Books</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <ColorMode />
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply max-w-[1000px] mx-auto w-full;

  @apply flex justify-between items-center;
  @apply p-8;

  &_nav {
    @apply flex gap-10 items-center;
    @apply hover:text-gray-300;

    a {
      @apply hover:text-violet-600 hover:scale-[105%] transition-all duration-300;
      font-family: 'Titillium Web', sans-serif;
    }
  }
}

.name {
  @apply text-2xl font-bold text-violet-800 opacity-80;
  @apply hover:text-violet-600 italic;
  font-family: 'Josefin Sans', Courier, monospace, sans-serif;
}
</style>
