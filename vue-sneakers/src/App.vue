<script setup lang="ts">
import CardList from './components/CardList.vue'
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'
</script>

<template>
	<Drawer />
	<div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-20 mb-14 pb-5">
		<Header />
		<div class="p-10">
			<h2 class="text-3xl font-bold mb-10">Все кроссовки</h2>
			<CardList />
		</div>
	</div>
</template>

<style scoped></style>
