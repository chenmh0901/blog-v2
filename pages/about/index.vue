<script setup lang="ts">
import Hero from '~/components/com/hero.vue'
import TechStack from '~/components/tech-stack/index.vue'
import ProjectList from '~/components/project-list/index.vue'
definePageMeta({
  layout: 'base',
})
</script>
<template>
  <div>
    <Hero
      title="Projects"
      :descpition="`Here is amumu ，我从大学开始接触 code ，前端开发实习生，目前大四在读`"
    />

    <TechStack />

    <ProjectList />
  </div>
</template>

<style scoped lang="scss"></style>
