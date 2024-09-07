<script setup lang="ts">
defineProps<{
  title: string
  descpition: string
}>()
</script>
<template>
  <div class="hero">
    <h1>
      {{ title }}
    </h1>
    <h2>
      {{ descpition }}
    </h2>
  </div>
</template>

<style scoped lang="scss">
.hero {
  @apply pb-5;
  @apply flex flex-col;

  h1 {
    @apply text-4xl font-semibold;
  }

  h2 {
    @apply mt-4;
  }
}
</style>
