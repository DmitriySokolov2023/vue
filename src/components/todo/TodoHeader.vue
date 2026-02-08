<script setup lang="ts">
const props = withDefaults(defineProps<{ loading?: boolean }>(), {
	loading: false,
})

const emit = defineEmits<{ (e: 'reload'): void }>()
</script>

<template>
	<div class="header">
		<div>
			<h1 class="title">Vue To-Do</h1>
			<p class="subtitle">
				Данные: JSONPlaceholder. Сейчас делаем базу: загрузка и отображение.
			</p>
			<button class="btn" @click="emit('reload')" :disabled="props.loading">
				Обновить
			</button>
		</div>
	</div>
</template>

<style scoped>
.header {
	display: flex;
	gap: 12px;
	justify-content: space-between;
	align-items: flex-start;
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
