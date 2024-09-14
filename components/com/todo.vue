<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import type { ITodo } from '~/types/from-directus'
import { readItems } from '@directus/sdk'
import { formateDayDate } from '~/utils/time'

const props = defineProps<{
  TodoCollection: string
  title: string
}>()

const todos = ref()
const fetchingTodo = ref(true)

const readTodos = async () => {
  const data = client.request<ITodo>(
    readItems(props.TodoCollection, { sort: '-date_updated' }),
  )

  return data
}

const mdContent = ref()

onMounted(async () => {
  todos.value = await readTodos()
  if (todos.value.length > 0) {
    mdContent.value = new MarkdownIt().render(todos.value[0].content)
  }
  fetchingTodo.value = false
})

const currentTodoIndex = ref(0)
const currentTodo = computed(() => todos.value[currentTodoIndex.value])

const forwardTodo = () => {
  if (currentTodoIndex.value > 0) {
    currentTodoIndex.value--
  }
}

const backTodo = () => {
  if (currentTodoIndex.value < todos.value.length - 1) {
    currentTodoIndex.value++
  }
}

watch(currentTodoIndex, (newIndex) => {
  if (newIndex >= 0 && newIndex < todos.value.length) {
    mdContent.value = new MarkdownIt().render(todos.value[newIndex].content)
  }
})
</script>
<template>
  <Transition name="fade" mode="out-in">
    <div v-if="fetchingTodo" class="skeleton">
      <div class="skeleton_header"></div>
      <div class="skeleton_content"></div>
    </div>
    <div class="todo" v-else="!fetchingTodo">
      <div class="todo_header">
        <div class="flex items-center gap-3">
          <button
            class="todo-button"
            @click="backTodo"
            :disabled="currentTodoIndex === todos.length - 1"
          >
            <Icon
              name="material-symbols:arrow-back-rounded"
              v-if="currentTodoIndex < todos.length - 1"
            />
          </button>
          <h3 class="text-center dark:text-gray-300">{{ title }}</h3>
          <button
            class="todo-button"
            @click="forwardTodo"
            :disabled="currentTodoIndex === 0"
          >
            <Icon
              name="material-symbols:arrow-forward-rounded"
              v-if="currentTodoIndex > 0"
            />
          </button>
        </div>
        <span class="todo-date">{{ formateDayDate(currentTodo.date) }}</span>
      </div>

      <div class="prose text-sm dark:prose-invert" v-html="mdContent" />
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.todo {
  @apply p-2 w-[300px] h-[140px];
  @apply border rounded dark:border-gray-800;
  @apply shadow-md;

  &_header {
    @apply flex justify-center items-center;
    @apply h-[20px];
    @apply relative;

    .todo-button {
      @apply w-[18px] h-[18px];
      @apply flex items-center justify-center;
      @apply hover:scale-110;
    }

    .todo-date {
      @apply h-full p-1;
      @apply border rounded shadow dark:border-gray-800;
      @apply text-center text-xs text-gray-800 dark:text-gray-300;
      @apply absolute right-0;
      @apply leading-3;
    }
  }
}

.skeleton {
  @apply p-2 w-[300px] h-[140px];
  @apply border rounded;
  @apply shadow-md;

  &_header {
    @apply h-[20px] bg-gray-300 rounded mb-2 dark:bg-gray-700;
  }

  &_content {
    @apply h-[100px] bg-gray-300 rounded dark:bg-gray-700;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: filter 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 10;
  filter: blur(10px);
}
</style>
