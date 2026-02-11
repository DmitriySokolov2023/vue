<script setup lang="ts">
import { useCounterStore } from '../../store/counter'

const emit = defineEmits<{ (e: 'handle', i: number): void }>()

const store = useCounterStore()
</script>

<template>
	<div>Значение из стора: {{ store.title }}</div>
	<button class="btn" @click="emit('handle', 5)">Нажми</button>
</template>

<style scoped></style>
