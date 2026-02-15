<script setup lang="ts">
import CartItemList from './CartItemList.vue'
import DrawerHead from './DrawerHead.vue'

const emit = defineEmits<{
	(e: 'close'): void
}>()
</script>

<template>
	<div
		class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"
		@click="emit('close')"
	></div>
	<div class="fixed top-0 right-0 h-full w-1/5 bg-white z-20 p-10">
		<DrawerHead @close="emit('close')" />
		<div class="flex flex-col h-full">
			<div class="flex-1 overflow-auto">
				<CartItemList />
			</div>
			<div class="flex flex-col gap-5 my-7">
				<div class="flex gap-2">
					<span>Итого</span>
					<div class="flex-1 border-b border-dashed opacity-20"></div>
					<span class="">12 990 р.</span>
				</div>
				<div class="flex gap-2">
					<span>Налог 5%</span>
					<div class="flex-1 border-b border-dashed opacity-20"></div>
					<span class="">900 р.</span>
				</div>
				<button
					class="transition bg-lime-500 w-full rounded-xl py-3 text-white disabled:bg-slate-300 hover:bg-lime-600 active:bg-lime-700 cursor-pointer"
				>
					Оформить заказ
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
