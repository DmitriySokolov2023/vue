<script setup lang="ts">
defineProps<{ notes: string[] }>()

const emit = defineEmits<{ (e: 'remove', index: number): void }>()
</script>

<template>
	<div class="notes__items">
		<div class="notes__item" v-for="(note, i) in notes" :key="note + i">
			<div>[{{ i + 1 }}] {{ note }}</div>
			<div @click="emit('remove', i)" class="pointer">X</div>
		</div>
	</div>
</template>

<style scoped>
.notes__item {
	display: flex;
	gap: 10px;
	justify-content: space-between;
	margin-top: 10px;
}
</style>
