<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchTodos } from '../../api/todos'
import type { Todo } from '../../types/todo'
import TodoFilters from './TodoFilters.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

const todoList = ref<Todo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

async function reload() {
	loading.value = true
	error.value = null
	try {
		todoList.value = await fetchTodos({ userId: 1, limit: 15 })
	} catch (e) {
		error.value = e instanceof Error ? e.message : String(e)
	} finally {
		loading.value = false
	}
}
function toggleTodo(t: Todo) {
	// пока только локально переключаем (в следующем шаге добавим PATCH запрос)
	t.completed = !t.completed
}
onMounted(reload)
</script>

<template>
	<div class="container">
		<div class="card">
			<TodoHeader :loading="false" @reload="reload" />
			<TodoFilters />
			<TodoList :todo-list="todoList" v-if="!loading" @toggle="toggleTodo" />
			<div v-else>Загрузка</div>
		</div>
	</div>
</template>
