<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <Icon
    v-if="colorMode.preference === 'dark'"
    name="mdi:weather-night"
    class="color-mode-icon"
    @click="toggleColorMode"
  />
  <Icon
    v-else
    name="mdi:weather-sunny"
    class="color-mode-icon"
    @click="toggleColorMode"
  />
</template>

<style lang="scss" scoped>
.color-mode-icon {
  @apply cursor-pointer hover:scale-[120%] text-lg duration-300 transition-all;
  @apply hover:text-violet-500 dark:text-gray-300;
}
</style>
