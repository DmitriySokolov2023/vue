<script setup lang="ts">
import { useCounterStore } from '../../store/counter'
import TestChildrenTwo from './TestChildrenTwo.vue'

const props = defineProps<{ count: number }>()
const emit = defineEmits<{ (e: 'handle', i: number): void }>()

const store = useCounterStore()

const editTitle = () => {
	if (store.title === 'Меня можно получить в любом из компонентов') {
		store.title = 'Новый тайтл'
	} else {
		store.title = 'Меня можно получить в любом из компонентов'
	}
}
</script>

<template>
	<div>И число как пропс: {{ props.count }}</div>
	<button class="btn" @click="editTitle">Изменить тайтл</button>
	<TestChildrenTwo @handle="emit('handle', 5)" />
</template>

<style scoped></style>
