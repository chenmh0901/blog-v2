<script setup lang="ts">
const online = ref(false)

useHead({
  title: online.value ? "Amumu's Blog" : 'Amumu的学习树洞',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Home page description',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
