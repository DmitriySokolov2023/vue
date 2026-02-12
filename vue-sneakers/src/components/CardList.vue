<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { CardInterface } from '../types/card'
import Card from './Card.vue'

const cards = ref<CardInterface[]>()
const fetchData = async () => {
	try {
		const res = await fetch('https://604781a0efa572c1.mokky.dev/items')

		if (!res.ok) {
			throw new Error('Ошибка загрузки')
		}

		cards.value = await res.json()
		cards.value = cards.value?.slice(0, 10)
	} catch (e) {
		console.error(e)
	}
}
const addFavorite = () => {
	alert('Добавлено!')
}
onMounted(fetchData)
</script>

<template>
	<div>
		<div class="grid grid-cols-4 gap-5">
			<Card
				v-for="card in cards"
				:card="card"
				:is-added="false"
				:is-favorite="false"
				:key="card.id"
				@add-favorites="addFavorite"
			/>
		</div>
	</div>
</template>

<style scoped></style>
