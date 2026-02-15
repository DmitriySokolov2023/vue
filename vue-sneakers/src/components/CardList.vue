<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

import { getSneakers, type ApiParams } from '../services/sneakers/sneakers'
import type { CardInterface } from '../types/card'
import Card from './Card.vue'

const cards = ref<CardInterface[]>([])

const loading = ref<boolean>(true)
const error = ref<string | null>(null)

const props = defineProps<{
	params: ApiParams
}>()

const addFavorite = () => {
	console.log('Добавлено в избранное')
}
const fetchData = async (params: ApiParams) => {
	try {
		loading.value = true
		const data = await getSneakers('items', params)
		cards.value = data.slice(0, 10).map(item => ({
			...item,
			isFavorite: false,
			isAdded: false,
		}))
	} catch (err) {
		error.value = 'Не удалось загрузить кроссовки'
		console.error(err)
	} finally {
		loading.value = false
	}
}

const fetchFavorites = async (params: ApiParams) => {
	try {
		loading.value = true
		const data = await getSneakers('favorites')
		cards.value = data
	} catch (err) {
		error.value = 'Не удалось загрузить избранные кроссовки'
		console.error(err)
	} finally {
		loading.value = false
	}
}

onMounted(() => {
	fetchData(props.params)
	// fetchFavorites(props.params)
})
watch(() => props.params, fetchData, { deep: true })
</script>

<template>
	<div v-if="loading" class="text-center py-10">Загрузка...</div>

	<div v-else-if="error" class="text-center py-10 text-red-500">
		{{ error }}
	</div>
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
</template>

<style scoped></style>
