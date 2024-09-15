<script setup lang="ts">
const colorMode = useColorMode()

// 判断是否支持 startViewTransition API
const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

// 切换动画
const toggleColorMode = async ({ clientX: x, clientY: y }: MouseEvent) => {
  const isDark = colorMode.value === 'dark'
  const setColorMode = () => {
    colorMode.preference = isDark ? 'light' : 'dark'
  }

  if (!enableTransitions()) {
    setColorMode()
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  await document.startViewTransition(async () => {
    setColorMode()
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: !isDark ? [...clipPath].reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`,
    },
  )
}
</script>

<template>
  <Icon
    v-if="colorMode.preference === 'dark'"
    name="ic:outline-nights-stay"
    class="color-mode-icon"
    @click="toggleColorMode"
  />
  <Icon
    v-else
    name="ic:outline-wb-sunny"
    class="color-mode-icon"
    @click="toggleColorMode"
  />
</template>

<style lang="scss" scoped>
.color-mode-icon {
  @apply cursor-pointer hover:scale-[120%] text-lg duration-300 transition-all;
  @apply hover:text-violet-500 dark:text-gray-300;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}
</style>
