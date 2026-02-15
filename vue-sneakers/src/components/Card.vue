<script setup lang="ts">
import type { CardInterface } from '../types/card'

defineProps<{
	card: CardInterface
	isAdded: Boolean
	isFavorite: Boolean
}>()

const emit = defineEmits<{ (e: 'add-favorites'): void }>()
</script>

<template>
	<div
		class="relative bg-white border border-slate-100 rounded-3xl cursor-pointer p-8 hover:-translate-y-2 hover:shadow-xl transition"
	>
		<img
			class="absolute top-8 left-8"
			:src="!isFavorite ? '/like-1.svg' : '/like-2.svg'"
			alt="like 1"
			@click.stop="emit('add-favorites')"
		/>
		<img :src="card.imageUrl" alt="Sneaker" />
		<p class="mt-5">{{ card.title }}</p>
		<div class="flex justify-between">
			<div class="flex flex-col">
				<span class="text-slate-400">Цена: </span>
				<span>{{ card.price }} руб. </span>
			</div>
			<img :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" />
		</div>
	</div>
</template>

<style scoped></style>
