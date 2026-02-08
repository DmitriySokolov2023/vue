<script setup lang="ts"></script>

<template>
	<li class="item">
		<input
			class="checkbox"
			type="checkbox"
			:checked="todo.completed"
			:disabled="disabled"
			@change="$emit('toggle', todo)"
		/>

		<div class="content">
			<div class="text" :class="{ done: todo.completed }">
				{{ todo.title }}
			</div>
			<div class="meta">id: {{ todo.id }}</div>
		</div>
	</li>
</template>

<style scoped>
.item {
	display: flex;
	gap: 10px;
	align-items: center;
	padding: 10px;
	border-radius: 12px;
	border: 1px solid var(--border);
	background: rgba(255, 255, 255, 0.05);
}
.checkbox {
	width: 18px;
	height: 18px;
	cursor: pointer;
}
.content {
	flex: 1 1 auto;
	min-width: 0;
}
.text {
	font-size: 14px;
	line-height: 1.25;
	word-break: break-word;
}
.text.done {
	text-decoration: line-through;
	color: rgba(229, 231, 235, 0.55);
}
.meta {
	margin-top: 4px;
	font-size: 12px;
	color: rgba(229, 231, 235, 0.65);
}
</style>
