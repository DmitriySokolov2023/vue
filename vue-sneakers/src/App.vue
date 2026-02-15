<script setup lang="ts">
import { reactive, ref } from 'vue'
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'

const isViewCart = ref(false)
const params = reactive({
	sortBy: 'title',
	searchQuery: '',
})

const toggleViewCart = () => {
	isViewCart.value = !isViewCart.value
}
</script>

<template>
	<Drawer v-if="isViewCart" @close="toggleViewCart" />
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-20 mb-14 pb-5">
		<Header @close="toggleViewCart" />
		<div class="p-10">
			<div class="flex justify-between">
				<h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
				<div class="flex gap-3 items-center">
					<select
						class="py-2 px-3 border border-gray-300 focus:border-gray-500 rounded-xl"
						v-model="params.sortBy"
					>
						<option value="title">По названию</option>
						<option value="price">По цене (дешевые)</option>
						<option value="-price">По цене (дорогие)</option>
					</select>
					<div class="relative">
						<input
							class="border border-gray-200 p-2 rounded-xl outline-none focus:border-gray-400"
							type="text"
							placeholder="Поиск..."
							v-model="params.searchQuery"
						/>
						<img class="absolute top-3 right-3" src="/search.svg" alt="" />
					</div>
				</div>
			</div>

			<CardList :params="params" />
		</div>
	</div>
</template>

<style scoped></style>
