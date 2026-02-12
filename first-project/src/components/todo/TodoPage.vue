<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { fetchTodos } from '../../api/todos'
import type { Filter, Todo } from '../../types/todo'
import TodoFilters from './TodoFilters.vue'
import TodoHeader from './TodoHeader.vue'
import TodoList from './TodoList.vue'

const todoList = ref<Todo[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const filter = ref<Filter>('all')

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

const visibleTodos = computed(() => {
	if (filter.value === 'active')
		return todoList.value.filter(el => el.completed === false)
	if (filter.value === 'completed')
		return todoList.value.filter(el => el.completed === true)
	return todoList.value
})
const totalCount = computed(() => {
	return todoList.value.length
})
const activeCount = computed(() => {
	return todoList.value.filter(el => !el.completed).length
})
const completedCount = computed(() => {
	return todoList.value.filter(el => el.completed).length
})
function toggleTodo(t: Todo) {
	t.completed = !t.completed
}
watch(filter, (newVal: Filter, oldVal: Filter) => {
	console.log(`${oldVal} => ${newVal}`)
})
onMounted(reload)
</script>

<template>
	<div class="container">
		<div class="card">
			<TodoHeader :loading="loading" @reload="reload" />
			<TodoFilters
				v-model="filter"
				:total="totalCount"
				:active="activeCount"
				:completed="completedCount"
			/>
			<TodoList
				:todo-list="visibleTodos"
				v-if="!loading"
				@toggle="toggleTodo"
			/>
			<div v-else>Загрузка</div>
		</div>
	</div>
</template>
