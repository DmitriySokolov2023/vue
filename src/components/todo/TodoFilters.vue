<script setup lang="ts">
import type { Filter } from '../../types/todo'

const props = defineProps<{
	modelValue: Filter
	total: number
	active: number
	completed: number
}>()

const emit = defineEmits<{ (e: 'update:modelValue', v: Filter): void }>()

function set(v: Filter) {
	emit('update:modelValue', v)
}
</script>

<template>
	<div class="row row--wrap">
		<button
			class="btn"
			:class="{ 'btn--active': modelValue === 'all' }"
			@click="set('all')"
		>
			Все ({{ total }})
		</button>
		<button
			class="btn"
			:class="{ 'btn--active': modelValue === 'active' }"
			@click="set('active')"
		>
			Активные ({{ active }})
		</button>
		<button
			class="btn"
			:class="{ 'btn--active': modelValue === 'completed' }"
			@click="set('completed')"
		>
			Выполненные ({{ completed }})
		</button>
	</div>
</template>

<style scoped></style>
