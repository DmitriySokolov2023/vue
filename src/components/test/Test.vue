<script setup lang="ts">
import { ref } from 'vue'
import TestChildren from './TestChildren.vue'
const count = ref<number>(0)
function handleClick(index: number) {
	count.value += 1
	console.log('Это индекс снизу: ', index)
}
</script>

<template>
	<div class="container">
		<div class="card">
			<div>Количество: {{ count }}</div>
			<TestChildren :count="count" @handle="handleClick" />
		</div>
	</div>
</template>

<style scoped></style>
