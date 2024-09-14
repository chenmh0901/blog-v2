<script setup lang="ts">
import '~/assets/styles/color-mode.css'
useHead({
  title: 'Amumu的学习树洞',
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.font.im/css?family=Josefin+Sans:700|Karla|Titillium+Web:200,300',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
