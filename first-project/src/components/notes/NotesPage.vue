<script setup lang="ts">
import { ref } from 'vue'
import NotesList from './NotesList.vue'

const inputValue = ref<string>('')
const notes = ref<string[]>(['Первая заметка', 'Вторая заметка'])

const addNotes = () => {
	notes.value.push(inputValue.value)
	inputValue.value = ''
}

const removeNotes = (index: number) => {
	notes.value.splice(index, 1)
	console.log('remove')
}
</script>

<template>
	<div class="container">
		<div class="card">
			<div class="notes__header">
				<h2 class="title">Notes</h2>
				<router-link to="/" class="title pointer">→</router-link>
			</div>

			<div class="notes">
				<input type="text" class="input" v-model="inputValue" />
				<button class="btn" @click="addNotes">Добавить</button>
			</div>
			<hr class="hr" />

			<NotesList :notes="notes" @remove="removeNotes" />
		</div>
	</div>
</template>

<style scoped>
.title {
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 0.2px;
}
.notes {
	display: flex;
	gap: 10px;
	align-items: end;
	margin-top: 15px;
}

.notes__header {
	display: flex;
	justify-content: space-between;
}
</style>
