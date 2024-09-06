<script setup lang="ts"></script>
<template>
  <div class="layout-base">
    <ComHeader />
    <main>
      <slot />
    </main>
    <ComFooter />
  </div>
</template>

<style scoped lang="scss">
.layout-base {
  @apply min-h-screen flex flex-col;
}

main {
  @apply max-w-[1000px] mx-auto w-full;
}
</style>
