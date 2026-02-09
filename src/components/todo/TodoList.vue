<script setup lang="ts">
import type { Todo } from '../../types/todo'
import TodoItem from './TodoItem.vue'

defineProps<{
	todoList: Todo[]
	disabled?: boolean
}>()

defineEmits<{ (e: 'toggle', t: Todo): void }>()
</script>

<template>
	<ul class="list">
		<TodoItem
			v-for="t in todoList"
			:todo="t"
			:disabled="disabled"
			@toggle="$emit('toggle', $event)"
		/>
	</ul>
</template>

<style scoped>
.list {
	list-style: none;
	padding: 0;
	margin: 14px 0 0;
	display: flex;
	flex-direction: column;
	gap: 8px;
}
</style>
