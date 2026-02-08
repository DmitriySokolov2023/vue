<script setup lang="ts">
import TodoFilters from './TodoFilters.vue'
import TodoHeader from './TodoHeader.vue'
</script>

<template>
	<div class="container">
		<div class="card">
			<TodoHeader :loading="false" @reload="" />
			<TodoFilters />
			<!-- <TodoList /> -->
		</div>
	</div>
</template>
