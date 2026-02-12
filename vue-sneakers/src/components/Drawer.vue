<script setup lang="ts">
import CartItemList from './CartItemList.vue'
import DrawerHead from './DrawerHead.vue'
</script>

<template>
	<div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
	<div class="fixed top-0 right-0 h-full w-1/5 bg-white z-20 p-10">
		<DrawerHead />
		<div class="flex flex-col h-full">
			<CartItemList />
			<div>
				<div class="flex gap-2 items-end">
					<span>Итого</span>
					<div class="flex-1 border-b border-dashed opacity-20"></div>
					<span class="">12 990р.</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
