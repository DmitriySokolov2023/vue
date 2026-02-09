<script setup lang="ts">
import { reactive } from 'vue'
import type { FormData } from './types/FormType'

const form = reactive<FormData>({
	field1: '',
	field2: '',
	field3: '',
	field4: '',
	field5: '',
})

function onSubmit() {
	// здесь у тебя уже все значения
	console.log('submit:', { ...form })

	// пример: очистить
	// Object.assign(form, { field1:'', field2:'', field3:'', field4:'', field5:'' })
}
</script>

<template>
	<form class="container" @submit.prevent="onSubmit">
		<div class="card">
			<h1 class="title">Форма</h1>
			<div class="inputs">
				<input
					type="text"
					class="input"
					placeholder="Поле1"
					v-model.trim="form.field1"
				/>
				<input
					type="text"
					class="input"
					placeholder="Поле2"
					v-model.trim="form.field2"
				/>
				<input
					type="text"
					class="input"
					placeholder="Поле3"
					v-model.trim="form.field3"
				/>
				<input
					type="text"
					class="input"
					placeholder="Поле4"
					v-model.trim="form.field4"
				/>
				<input
					type="text"
					class="input"
					placeholder="Поле5"
					v-model.trim="form.field5"
				/>
			</div>
			<button class="btn">Обновить</button>
		</div>
	</form>
</template>

<style scoped>
.title {
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 0.2px;
	margin-bottom: 15px;
}

.inputs {
	display: flex;
	flex-direction: column;
	gap: 10px;
}
:last-child {
	margin-bottom: 15px;
}
</style>
