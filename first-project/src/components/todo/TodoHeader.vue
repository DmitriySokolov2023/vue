<script setup lang="ts">
const props = defineProps<{ loading: boolean }>()

const emit = defineEmits<{ (e: 'reload'): void }>()
</script>

<template>
	<div class="header">
		<h1 class="title">Vue To-Do</h1>
		<button class="btn" @click="emit('reload')" :disabled="props.loading">
			Обновить
		</button>
	</div>
</template>

<style scoped>
.header {
	display: flex;
	gap: 12px;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.title {
	margin: 0;
	font-size: 20px;
	font-weight: 700;
	letter-spacing: 0.2px;
}
.subtitle {
	margin: 6px 0;
	font-size: 13px;
	color: var(--muted);
	line-height: 1.3;
}
</style>
