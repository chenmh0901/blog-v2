<script setup lang="ts">
import { getIconName } from '~/utils/icon-mapping'

defineProps<{
  tech: string
}>()
</script>
<template>
  <div class="tech">
    <Icon :name="getIconName(tech)" class="tech_icon" />
    <span class="tech_name">
      {{ tech }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.tech {
  @apply flex items-center;
  @apply shadow border rounded-xl p-1 px-2;
  @apply dark:border-none dark:bg-gray-300 dark:bg-opacity-10;

  &_icon {
    @apply w-[18px] h-[18px];
  }

  &_name {
    @apply text-xs text-gray-600 ml-2 dark:text-gray-300;
  }
}
</style>
